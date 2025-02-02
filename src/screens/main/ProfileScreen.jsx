import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SesionContext } from '../../contexts/SesionContextScreen';
import { CommonActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
    const { user, logout } = useContext(SesionContext);

    const handleLogout = () => {
        Alert.alert(
            'Cerrar Sesión',
            '¿Estás seguro de que deseas cerrar sesión?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Cerrar Sesión',
                    onPress: () => {
                        logout();
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 1,
                                routes: [
                                    { name: 'Login' }
                                ],
                            })
                        );
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: true }
        );
    };
    if (!user) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#181818' }}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>No se encontró el usuario</Text>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.value}>{user.name}</Text>

                <Text style={styles.label}>Apellido:</Text>
                <Text style={styles.value}>{user.lname}</Text>

                <Text style={styles.label}>Cargo:</Text>
                <Text style={styles.value}>{user.cargo}</Text>

                <Text style={styles.label}>DNI:</Text>
                <Text style={styles.value}>{user.dni}</Text>

                <Text style={styles.label}>Celular:</Text>
                <Text style={styles.value}>{user.cellphone || '-'}</Text>
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Ionicons name="log-out" size={30} color={'black'} />
                <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileInfo: {
        backgroundColor: '#3C3C3C',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        color: '#DBDBDB',
        marginBottom: 15,
    },
    logoutButton: {
        backgroundColor: '#FFD946',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    logoutButtonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
});

export default ProfileScreen;