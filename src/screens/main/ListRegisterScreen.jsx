import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { CONFIG } from '../../config';
import { SesionContext } from '../../contexts/SesionContextScreen';
import { generatePdf } from '../../utils/generatePdf';

const RegisterItem = ({ visit }) => {
    const visitDate = new Date(visit.createdAt).toLocaleDateString();
    return (
        <View style={styles.visitItem}>
            <View style={styles.visitInfo}>
                <Text style={styles.userName}>{visit.teacher.name}</Text>
                <Text style={styles.schoolAddress}>{visit.school.name}</Text>
                <Text style={styles.visitDate}>{visitDate}</Text>
            </View>
            <TouchableOpacity onPress={() => generatePdf(visit)} style={styles.avatarContainer}>
                <Ionicons name="download-outline" size={34} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const ListRegisterScreen = () => {
    const { user } = useContext(SesionContext);
    const [visitsData, setVisitsData] = useState(null);

    const getData = () => {
        axios.get(`${CONFIG.uri}/api/monitors/${user.dni}`)
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
            {visitsData && visitsData.length > 0 && (<Text style={styles.title}>Últimos monitoreos</Text>)}
            {visitsData && visitsData.length > 0 && (
                <FlatList
                    data={visitsData}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <RegisterItem visit={item} />}
                    contentContainerStyle={styles.listContent}
                />
            )}
            {visitsData && visitsData.length == 0 && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>No tiene ningún registro</Text>
                </View>
            )}
        </View>
    );
};

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
    visitInfo: {
        flex: 1,
    },
    userName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    schoolAddress: {
        color: '#A0A0A0',
        fontSize: 14,
        marginTop: 5,
    },
    visitDate: {
        color: '#A0A0A0',
        fontSize: 14,
        marginTop: 5,
    },
});

export default ListRegisterScreen;
