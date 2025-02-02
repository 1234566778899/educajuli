import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { CONFIG } from '../config';
import { SesionContext } from '../contexts/SesionContextScreen';
import { CommonActions } from '@react-navigation/native';

const CourseScreen = ({ navigation }) => {
    const [originalCourses, setOriginalCourses] = useState([
        {
            code: 'MAT11',
            name: 'Matemáticas Básicas',
            description: 'Curso introductorio de matemáticas para estudiantes de primer año.'
        },
        {
            code: 'SCI201',
            name: 'Ciencias Naturales',
            description: 'Exploración de biología, química y física para estudiantes de secundaria.'
        },
        {
            code: 'HIST301',
            name: 'Historia del Perú',
            description: 'Estudio de los eventos históricos más importantes del Perú.'
        },
        {
            code: 'LIT401',
            name: 'Literatura Peruana',
            description: 'Análisis de obras literarias peruanas y su impacto cultural.'
        },
        {
            code: 'ART501',
            name: 'Arte y Dibujo',
            description: 'Desarrollo de habilidades artísticas y técnicas de dibujo.'
        },
        {
            code: 'PHYS1',
            name: 'Educación Física',
            description: 'Actividades deportivas y ejercicios para mejorar la salud física.'
        },
        {
            code: 'MUS1',
            name: 'Música y Folclore Peruano',
            description: 'Introducción a la música tradicional peruana y práctica de instrumentos.'
        },
        {
            code: 'TECH1',
            name: 'Tecnología e Informática',
            description: 'Uso de herramientas tecnológicas y programación básica.'
        },
        {
            code: 'LANG1',
            name: 'Inglés Básico',
            description: 'Aprendizaje de inglés para estudiantes de secundaria.'
        },
        {
            code: 'SOC1001',
            name: 'Realidad Nacional',
            description: 'Estudio de la sociedad, cultura y geografía del Perú.'
        }
    ]);

    const [filteredCourses, setFilteredCourses] = useState(originalCourses);
    const { setCurrentCourse } = useContext(SesionContext);

    const search = (searchText) => {
        const word = searchText.toLowerCase();
        const filtered = originalCourses.filter(x =>
            x.name.toLowerCase().includes(word) ||
            x.code.toLowerCase().includes(word) ||
            x.description.toLowerCase().includes(word)
        );
        setFilteredCourses(filtered);
    };
    const selectEnrollment = (course) => {
        setCurrentCourse(course);
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'home' },
                    { name: 'monitor' }
                ],
            })
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <TextInput
                    onChangeText={text => search(text)}
                    placeholder='Buscar curso...'
                    theme={{ colors: { primary: 'gray' } }}
                    mode="outlined"
                    label='Nombre del curso'
                    style={{ marginTop: 20 }}
                    left={<TextInput.Icon icon="magnify" />}
                />
            </View>
            <ScrollView style={{ paddingHorizontal: 20, marginTop: 20 }}>
                {filteredCourses.map(x => (
                    <TouchableOpacity
                        onPress={() => selectEnrollment(x)}
                        key={x.code}
                        style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#E6E6E6', borderBottomWidth: 1, paddingVertical: 10 }}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="book" size={35} />
                            <Text>{x.code}</Text>
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{x.name}</Text>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{ flexShrink: 1 }}>
                                {x.description}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CourseScreen;