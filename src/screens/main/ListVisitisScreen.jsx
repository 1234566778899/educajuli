import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { CONFIG } from '../../config';
import { SesionContext } from '../../contexts/SesionContextScreen';
// Datos en memoria simulando varias visitas


// Componente para renderizar cada item de la lista
const VisitItem = ({ visit }) => {
    const visitDate = new Date(visit.createdAt).toLocaleDateString();

    return (
        <View style={styles.visitItem}>
            <View style={styles.avatarContainer}>
                <Ionicons name="school-outline" size={34} color="#A0A0A0" />
            </View>
            <View style={styles.visitInfo}>
                <Text style={styles.userName}>{visit.school.name}</Text>
                <Text style={styles.schoolAddress}>{visit.school.province}, {visit.school.district}</Text>
                <Text style={styles.visitDate}>{visitDate}</Text>
            </View>
        </View>
    );
};

// Pantalla principal que muestra la lista de visitas
const ListVisitsScreen = () => {
    const { user } = useContext(SesionContext);
    const [visitsData, setVisitsData] = useState(null);
    const getData = () => {
        axios.get(`${CONFIG.uri}/api/visits/${user.dni}`)
            .then(res => {
                setVisitsData(res.data);
            })
            .catch(error => {
                alert('Error en el servidor');
                console.log(error);
            })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <View style={styles.container}>
            {
                visitsData && visitsData.length > 0 && (
                    <View>
                        <Text style={styles.title}>Últimas visitas</Text>
                        <FlatList
                            data={visitsData}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => <VisitItem visit={item} />}
                            contentContainerStyle={styles.listContent}
                        />
                    </View>
                )
            }
            {
                visitsData && visitsData.length == 0 && (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>No tiene ningún registro</Text>
                    </View>)
            }

        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    listContent: {
        paddingBottom: 20,
    },
    visitItem: {
        backgroundColor: '#2A2A2A',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        marginRight: 15,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    visitInfo: {
        flex: 1,
    },
    userName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    schoolName: {
        color: '#A0A0A0',
        fontSize: 16,
        marginTop: 5,
    },
    visitDate: {
        color: '#A0A0A0',
        fontSize: 14,
        marginTop: 5,
    },
    schoolAddress: {
        color: '#A0A0A0',
        fontSize: 14,
        marginTop: 5,
    },
});

export default ListVisitsScreen;