import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Switch, Text, RadioButton, Menu, Button } from 'react-native-paper';
import { SesionContext } from '../contexts/SesionContextScreen';
import { CommonActions } from '@react-navigation/native';

const GradeScreen = ({ navigation }) => {
    const [nivelEducativo, setNivelEducativo] = useState('Primaria');
    const [grado, setGrado] = useState('1');
    const [seccion, setSeccion] = useState('A');
    const [menuVisible, setMenuVisible] = useState(false);
    const gradosPrimaria = ['1', '2', '3', '4', '5', '6'];
    const gradosSecundaria = ['1', '2', '3', '4', '5'];
    const secciones = ['A', 'B', 'C', 'D', 'E'];
    const { setEducation } = useContext(SesionContext);

    const saveEducation = () => {
        setEducation({ level: nivelEducativo, grade: grado, section: seccion });
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'home' },
                    { name: 'monitor' }
                ],
            })
        );

    }
    return (
        <View style={styles.container}>
            <View style={{ padding: 20 }}>
                <View style={styles.switchContainer}>
                    <Text style={styles.label}>Nivel Educativo</Text>
                    <View style={styles.switchWrapper}>
                        <Text style={{ color: 'white' }}>Primaria</Text>
                        <Switch
                            value={nivelEducativo === 'Secundaria'}
                            onValueChange={(value) =>
                                setNivelEducativo(value ? 'Secundaria' : 'Primaria')
                            }
                            color="#2196F3"
                        />
                        <Text style={{ color: 'white' }}>Secundaria</Text>
                    </View>
                </View>

                {/* Radio Buttons para Grado */}
                <Text style={styles.label}>Grado</Text>
                <RadioButton.Group onValueChange={(value) => setGrado(value)} value={grado}>
                    <View style={styles.radioContainer}>
                        {(nivelEducativo === 'Primaria' ? gradosPrimaria : gradosSecundaria).map(
                            (gradoOption) => (
                                <View key={gradoOption} style={styles.radioItem}>
                                    <RadioButton value={gradoOption} color="#2196F3" />
                                    <Text style={{ color: 'white' }}>{gradoOption}</Text>
                                </View>
                            )
                        )}
                    </View>
                </RadioButton.Group>
                <Text style={styles.label}>Sección</Text>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    {
                        secciones.map(x => (
                            <TouchableOpacity
                                onPress={() => setSeccion(x)}
                                key={x} style={{ backgroundColor: seccion == x ? '#2196F3' : '#181818', flex: 1, height: 50, justifyContent: 'center', borderRadius: 2, borderWidth: seccion == x ? 0 : 1, borderColor: 'white' }}>
                                <Text style={{ alignSelf: 'center', color: 'white' }}>{x}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>

            {/* Botón de Guardar */}
            <View style={{ position: 'absolute', bottom: 10, width: '100%', paddingHorizontal: 20 }}>
                <TouchableOpacity
                    onPress={() => saveEducation()}
                    style={{ backgroundColor: '#FFD946', paddingVertical: 15, borderRadius: 5, marginTop: 20, }}
                >
                    <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    switchContainer: {
        marginBottom: 20,
    },
    switchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        marginBottom: 10,
    }
});

export default GradeScreen;