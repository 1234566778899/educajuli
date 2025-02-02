import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, PanResponder, ActivityIndicator, Modal, StyleSheet, Easing, Image, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { CONFIG } from '../../config';
import { SesionContext } from '../../contexts/SesionContextScreen';
import { DataRegister } from '../../utils/dataRegister';
import { CommonActions } from '@react-navigation/native';

const MonitorScreen = ({ navigation }) => {
    const w = 60;

    const { user, teacherCurrent, setTeacherCurrent, startAt, setStartAt, setCurrentCourse, setDesempenios, currentCourse, currentDesempenio, desempenios, setCurrentDesempenio, education, setEducation, visit, setVisit } = useContext(SesionContext);
    const heightAnim = useRef(new Animated.Value(currentDesempenio == 0 ? 360 : 140)).current;
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                const newHeight = 360 - gestureState.dy;
                if (newHeight >= 140 && newHeight <= 360) {
                    heightAnim.setValue(newHeight);
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                const newHeight = 360 - gestureState.dy;
                if (newHeight > 240) {
                    Animated.spring(heightAnim, {
                        toValue: 360,
                        useNativeDriver: false,
                    }).start();
                } else {
                    Animated.spring(heightAnim, {
                        toValue: 140,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    const getLastVisit = () => {
        axios.get(`${CONFIG.uri}/api/visits/last/${user.dni}`)
            .then(res => {
                if (res.data) {
                    setStartAt(new Date());
                    setVisit(res.data);
                } else {
                    Alert.alert(
                        'Error',
                        'No se encontró ninguna visita',
                        [
                            {
                                text: 'Volver al menú',
                                onPress: () => navigation.navigate('home'),
                                style: 'cancel'
                            },
                            {
                                text: 'Agregar visita',
                                onPress: () => navigation.dispatch(
                                    CommonActions.reset({
                                        index: 1,
                                        routes: [
                                            { name: 'home' },
                                            { name: 'schools' },
                                        ],
                                    })
                                )
                            },
                        ]
                    )
                }
            })
            .catch(error => {
                console.log(error);
                alert('Error en el servidor');
            });
    };

    const validatePerformers = () => {
        for (const p of desempenios) {
            for (const a of p.aspectos) {
                if (a.points == 0) {
                    return false;
                }
            }
        }
        return true;
    };

    const getFormattedDate = () => {
        const date = new Date();
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
    };

    const cleanData = () => {
        setTeacherCurrent(null);
        setCurrentCourse(null);
        setCurrentDesempenio(0);
        setDesempenios(JSON.parse(JSON.stringify(DataRegister)));
        setEducation(null);
        setStartAt(null);
    };

    const saveMonitor = () => {
        if (!validatePerformers()) return Alert.alert(
            'Error',
            'Debe llenar todas las preguntas',
            [
                { text: 'Aceptar', onPress: () => { } }
            ]
        );
        if (!teacherCurrent) return alert('Debe elegir a un profesor');
        if (!visit) return Alert.alert(
            'Error',
            'No hay registro de ninguna visita',
            [
                { text: 'Aceptar', onPress: () => { } }
            ]
        );
        if (!user) return Alert.alert(
            'Error',
            'El usuario no es válido. Por favor, revise su nombre de usuario y contraseña.',
            [
                { text: 'Aceptar', onPress: () => { } }
            ]
        );
        setIsLoading(true);
        axios.post(`${CONFIG.uri}/api/monitors`,
            {
                performances: desempenios,
                teacher: teacherCurrent,
                ...education,
                school: visit.school,
                user,
                startAt,
                visit: visit._id,
                area: {
                    code: currentCourse.code,
                    name: currentCourse.name,
                }
            })
            .then(res => {
                setIsLoading(false);
                setModalVisible(true);
                cleanData();
            })
            .catch(error => {
                alert('Error en el servidor');
                setIsLoading(false);
                console.log(error);
            });
    };

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'home' }
                ],
            })
        );
    };
    const cancel = () => {
        Alert.alert(
            'Confirmación',
            '¿Esta seguro de cancelar el registro?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'Aceptar',
                    onPress: () => {
                        cleanData();
                        cleanData(); navigation.navigate('home')
                    }
                }
            ]
        )
    }
    useEffect(() => {
        if (!startAt) {
            getLastVisit();
        }
    }, []);

    const renderTabs = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                {DataRegister.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setCurrentDesempenio(index)}
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderBottomWidth: 2,
                            flex: 1,
                            borderBottomColor: currentDesempenio === index ? '#FFD946' : 'transparent',
                        }}
                    >
                        <Text style={{ color: currentDesempenio === index ? '#FFD946' : 'white', fontWeight: 'bold', textAlign: 'center' }}>
                            {index + 1}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#181818' }}>
            <Text style={{ alignSelf: 'center', color: 'white', marginTop: 20 }}>{getFormattedDate()}</Text>
            {renderTabs()}

            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                <View style={{ flexDirection: 'row', marginTop: 30, gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        desempenios[currentDesempenio].aspectos.map((aspect, index) => (
                            <TouchableOpacity key={index} onPress={() => navigation.push('performance', { currentDesempenio: currentDesempenio, currentAspecto: index })}
                                style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7, backgroundColor: aspect.points != 0 ? '#2196F3' : 'transparent' }}>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>

            <View style={{ flexDirection: 'row', gap: 50, justifyContent: 'center', marginTop: 40 }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, borderWidth: 2, borderColor: 'white' }}></View>
                    <Text style={{ color: 'white', marginTop: 10 }}>Pendiente</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: '#2196F3', borderWidth: 1, borderColor: 'white' }}></View>
                    <Text style={{ color: 'white', marginTop: 10 }}>Completado</Text>
                </View>
            </View>

            <Animated.View
                style={{
                    marginTop: 20,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    position: 'absolute',
                    width: '100%',
                    bottom: 50,
                    height: heightAnim,
                    backgroundColor: '#3C3C3C',
                    borderRadius: 20
                }}
                {...panResponder.panHandlers}
            >
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: 50, height: 5, backgroundColor: 'gray', borderRadius: 10 }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
                        <View style={{ flex: 1, borderRadius: 5, padding: 5, backgroundColor: 'white' }}>
                            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 13 }}>Código</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{visit?.school?.code}</Text>
                        </View>
                        <View style={{ flex: 1, borderRadius: 5, padding: 5, backgroundColor: 'white' }}>
                            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 13 }}>IE</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{visit?.school?.name}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('courses')}
                            style={{ flex: 1, borderRadius: 5, padding: 5, backgroundColor: 'white' }}>
                            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 13 }}>Área</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{currentCourse ? currentCourse.name : '-'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('grade')}
                            style={{ flex: 1, borderRadius: 5, padding: 5, backgroundColor: 'white' }}>
                            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 13 }}>Grado</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{education?.level} - {education?.grade}{education?.section}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('teachers')}
                        style={{ flexDirection: 'row', gap: 10, marginTop: 10, alignItems: 'center' }}>
                        <View style={{ flex: 1, borderRadius: 5, padding: 5, backgroundColor: 'white' }}>
                            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 13 }}>Docente observado</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{teacherCurrent ? teacherCurrent.name : '-'}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                        <View style={{ flex: 1, borderRadius: 5, padding: 5, backgroundColor: 'white' }}>
                            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 13 }}>Especialista</Text>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{user?.name} {user?.lname}</Text>
                        </View>
                    </View>
                </ScrollView>
            </Animated.View>

            <View style={{ backgroundColor: '#1E1E1E', flexDirection: 'row', bottom: 0, position: 'absolute' }}>
                <TouchableOpacity
                    onPress={() => cancel()}
                    style={{ flex: 1, paddingVertical: 18 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={isLoading}
                    onPress={() => saveMonitor()}
                    style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFD946', paddingVertical: 18, flexDirection: 'row', justifyContent: 'center' }}>
                    {
                        isLoading ? (<ActivityIndicator size={25} />) : (<Text style={{ marginRight: 10, fontWeight: 'bold' }}>Grabar</Text>)
                    }
                    <Ionicons name="save-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Modal de Registrado */}
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onShow={fadeIn}
            >
                <View style={styles.centeredView}>
                    <Animated.View style={[styles.modalView, { opacity: fadeAnim }]}>
                        <Image source={require('../../assets/img1.png')} style={{ width: 70, height: 70, marginBottom: 20 }} />
                        <Text style={styles.modalText}>Registrado correctamente</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={fadeOut}
                        >
                            <Text style={styles.buttonText}>Volver al menú principal</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: 200,
        backgroundColor: '#2196F3',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default MonitorScreen;