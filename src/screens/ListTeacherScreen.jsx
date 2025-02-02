import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SesionContext } from '../contexts/SesionContextScreen';
import { CommonActions } from '@react-navigation/native';

const TeacherListScreen = ({ navigation }) => {
    const [originalTeachers, setOriginalTeachers] = useState([
        {
            id: 'TCH001',
            name: 'Juan Pérez',
            subject: 'Matemáticas',
            email: 'juan.perez@example.com'
        },
        {
            id: 'TCH002',
            name: 'María Gómez',
            subject: 'Ciencias',
            email: 'maria.gomez@example.com'
        },
        {
            id: 'TCH003',
            name: 'Carlos López',
            subject: 'Historia',
            email: 'carlos.lopez@example.com'
        },
        {
            id: 'TCH004',
            name: 'Ana Martínez',
            subject: 'Literatura',
            email: 'ana.martinez@example.com'
        },
        {
            id: 'TCH005',
            name: 'Luis Rodríguez',
            subject: 'Física',
            email: 'luis.rodriguez@example.com'
        },
        {
            id: 'TCH006',
            name: 'Sofía Hernández',
            subject: 'Química',
            email: 'sofia.hernandez@example.com'
        },
        {
            id: 'TCH007',
            name: 'Pedro Díaz',
            subject: 'Biología',
            email: 'pedro.diaz@example.com'
        },
        {
            id: 'TCH008',
            name: 'Laura Sánchez',
            subject: 'Inglés',
            email: 'laura.sanchez@example.com'
        },
        {
            id: 'TCH009',
            name: 'Miguel Torres',
            subject: 'Educación Física',
            email: 'miguel.torres@example.com'
        },
        {
            id: 'TCH010',
            name: 'Carmen Ruiz',
            subject: 'Arte',
            email: 'carmen.ruiz@example.com'
        }
    ]);
    const [filteredTeachers, setFilteredTeachers] = useState(originalTeachers);
    const { setTeacherCurrent } = useContext(SesionContext);

    const search = (searchText) => {
        const word = searchText.toLowerCase();
        const filtered = originalTeachers.filter(x =>
            x.name.toLowerCase().includes(word) ||
            x.id.toLowerCase().includes(word) ||
            x.subject.toLowerCase().includes(word) ||
            x.email.toLowerCase().includes(word)
        );
        setFilteredTeachers(filtered);
    };

    const selectTeacher = (teacher) => {
        setTeacherCurrent(teacher);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <TextInput
                    onChangeText={text => search(text)}
                    placeholder='Buscar profesor..'
                    theme={{ colors: { primary: 'gray' } }}
                    mode="outlined"
                    label='Nombre del profesor'
                    style={{ marginTop: 20 }}
                    left={<TextInput.Icon icon="magnify" />}
                />
            </View>
            <ScrollView style={{ paddingHorizontal: 20, marginTop: 20 }}>
                {filteredTeachers.map(x => (
                    <TouchableOpacity
                        onPress={() => selectTeacher(x)}
                        key={x.id} style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#E6E6E6', borderBottomWidth: 1, paddingVertical: 10 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="person" size={35} />
                            <Text>{x.id}</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{x.name}</Text>
                            <Text>{x.subject}</Text>
                            <Text>{x.email}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default TeacherListScreen;