import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { CONFIG } from '../config';
import { SesionContext } from '../contexts/SesionContextScreen';

const ListSchoolScreen = ({ navigation }) => {
    const [originalSchools, setOriginalSchools] = useState([
        {
            code: 'SCH001',
            name: 'Colegio San Agustín',
            province: 'Lima',
            district: 'San Isidro'
        },
        {
            code: 'SCH002',
            name: 'Colegio Markham',
            province: 'Lima',
            district: 'Miraflores'
        },
        {
            code: 'SCH003',
            name: 'Colegio Santa María',
            province: 'Lima',
            district: 'San Miguel'
        },
        {
            code: 'SCH004',
            name: 'Colegio Franklin D. Roosevelt',
            province: 'Lima',
            district: 'La Molina'
        },
        {
            code: 'SCH005',
            name: 'Colegio Peruano Británico',
            province: 'Lima',
            district: 'Santiago de Surco'
        },
        {
            code: 'SCH006',
            name: 'Colegio Regina Pacis',
            province: 'Lima',
            district: 'San Isidro'
        },
        {
            code: 'SCH007',
            name: 'Colegio Santa Úrsula',
            province: 'Lima',
            district: 'San Isidro'
        },
        {
            code: 'SCH008',
            name: 'Colegio Villa Caritas',
            province: 'Lima',
            district: 'La Molina'
        },
        {
            code: 'SCH009',
            name: 'Colegio San Silvestre',
            province: 'Lima',
            district: 'Miraflores'
        },
        {
            code: 'SCH010',
            name: 'Colegio Newton',
            province: 'Lima',
            district: 'La Molina'
        }
    ]);

    const [filteredSchools, setFilteredSchools] = useState(originalSchools);
    const { user, setStartAt } = useContext(SesionContext);
    const search = (searchText) => {
        const word = searchText.toLowerCase();
        const filtered = originalSchools.filter(x =>
            x.name.toLowerCase().includes(word) ||
            x.code.toLowerCase().includes(word) ||
            x.province.toLowerCase().includes(word) ||
            x.district.toLowerCase().includes(word)
        );
        setFilteredSchools(filtered);
    };
    const saveVisit = (school) => {
        axios.post(`${CONFIG.uri}/api/visits`, { user, school })
            .then(res => {
                setStartAt(null);
                navigation.navigate('home');
            })
            .catch(error => {
                Alert.alert(
                    'Error',
                    error.response.data.error,
                    [
                        {
                            text: 'Volver al menú',
                            onPress: () => navigation.navigate('home')
                        }
                    ]
                );
            })
    }
    const selectSchool = (school) => {
        Alert.alert(
            "Colegio seleccionado",
            `${school.name} - ${school.code}`,
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'Guardar visita',
                    onPress: () => saveVisit(school)
                },
            ]
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <TextInput
                    onChangeText={text => search(text)}
                    placeholder='Buscar colegio..'
                    theme={{ colors: { primary: 'gray' } }}
                    mode="outlined"
                    label='Nombre del colegio'
                    style={{ marginTop: 20 }}
                    left={<TextInput.Icon icon="magnify" />}
                />
            </View>
            <ScrollView style={{ paddingHorizontal: 20, marginTop: 20 }}>
                {filteredSchools.map(x => (
                    <TouchableOpacity
                        onPress={() => selectSchool(x)}
                        key={x.code} style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#E6E6E6', borderBottomWidth: 1, paddingVertical: 10 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="school" size={35} />
                            <Text>{x.code}</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{x.name}</Text>
                            <Text>{x.address}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ListSchoolScreen;