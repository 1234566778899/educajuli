import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SesionContext } from '../../contexts/SesionContextScreen';
import axios from 'axios';
import { CONFIG } from '../../config';

const HomeScreen = ({ navigation }) => {
    const { user } = useContext(SesionContext);
    const [quantity, setQuantity] = useState(null);

    const options = [
        { iconName: 'school-outline', title: 'Matricula', to: '' },
        { iconName: 'eye-outline', title: 'Monitoreo', to: 'monitor' },
        { iconName: 'stats-chart-outline', title: 'Reportes', to: 'report' },
        { iconName: 'add-circle-outline', title: 'Agregar Visita', to: 'schools' },
        { iconName: 'list-outline', title: 'Registros', to: 'registers' },
        { iconName: 'walk-outline', title: 'Mis visitas', to: 'visits' },
    ];

    const getQuantity = () => {
        axios.get(`${CONFIG.uri}/api/visits/quantity/${user.dni}`)
            .then(res => setQuantity(res.data))
            .catch(error => {
                console.log(error);
                alert('Error al cargar las cantidades');
            });
    };

    useEffect(() => {
        if (user) {
            getQuantity();
        }
    }, [user]);

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: 'https://dplnews.com/wp-content/uploads/2022/08/dplnews_Vi%CC%81ctor-Omar-A%CC%81lvarez-Herrera_mc170822.jpeg' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.userName}>{user?.name} {user?.lname}</Text>
                    <Text style={styles.userRole}>{user?.cargo}</Text>
                    <Text style={styles.userDni}>{user?.dni}</Text>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>{quantity?.visits || 0}</Text>
                    <Text style={styles.statLabel}>Visitas</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>{quantity?.monitors || 0}</Text>
                    <Text style={styles.statLabel}>Fichas</Text>
                </View>
            </View>

            <View style={styles.buttonRow}>
                {options.slice(0, 3).map(op => (
                    <TouchableOpacity
                        key={op.iconName}
                        onPress={() => op.to && navigation.navigate(op.to)}
                        style={styles.buttonPrimary}>
                        <Ionicons name={op.iconName} size={30} color="white" />
                        <Text style={styles.buttonTextPrimary}>{op.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.buttonRow}>
                {options.slice(3).map(op => (
                    <TouchableOpacity
                        key={op.iconName}
                        onPress={() => op.to && navigation.navigate(op.to)}
                        style={styles.buttonSecondary}>
                        <Ionicons name={op.iconName} size={30} color="#1976D2" />
                        <Text style={styles.buttonTextSecondary}>{op.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        height: 90,
        width: 90,
        borderRadius: 45,
    },
    profileInfo: {
        marginLeft: 20,
    },
    userName: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    userRole: {
        color: '#A0A0A0',
        fontSize: 16,
        marginTop: 5,
    },
    userDni: {
        color: '#A0A0A0',
        fontSize: 16,
        marginTop: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        backgroundColor: '#2A2A2A',
        borderRadius: 10,
        marginTop: 30,
        paddingVertical: 20,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statValue: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    statLabel: {
        color: '#A0A0A0',
        fontSize: 16,
        marginTop: 5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        gap: 10,
    },
    buttonPrimary: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    buttonSecondary: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#BBDEFB',
        borderRadius: 5,
    },
    buttonTextPrimary: {
        marginTop: 5,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonTextSecondary: {
        marginTop: 5,
        fontWeight: 'bold',
        color: '#1976D2',
    },
});

export default HomeScreen;