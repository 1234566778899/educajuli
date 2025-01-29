import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#181818', paddingHorizontal: 20 }}>
            <View style={{ marginTop: 30, alignItems: 'center', flexDirection: 'row' }}>
                <Image
                    style={{ height: 90, width: 90, borderRadius: 50 }}
                    source={{ uri: 'https://dplnews.com/wp-content/uploads/2022/08/dplnews_Vi%CC%81ctor-Omar-A%CC%81lvarez-Herrera_mc170822.jpeg' }}
                />
                <View style={{ marginLeft: 30 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Victor Herrera</Text>
                    <Text style={{ color: 'white', marginTop: 5 }}>Especialista Monitor</Text>
                    <Text style={{ color: 'white', marginTop: 5 }}>74638573</Text>
                </View>
            </View>

            <View style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 40, borderRadius: 5 }}>
                <View style={{ width: '50%', height: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>489</Text>
                    <Text>Visitas</Text>
                </View>
                <View style={{ width: '50%', height: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>95.2k</Text>
                    <Text>Fichas</Text>
                </View>
            </View>

            <View style={{ marginTop: 150 }}>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity style={{ borderRadius: 5, flex: 1, alignItems: 'center', justifyContent: 'center', height: 100, backgroundColor: 'white' }}>
                        <Ionicons name="school-outline" size={30} />
                        <Text style={{ marginTop: 5, fontWeight: 'bold' }}>MATRICULA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('monitor')}
                        style={{ flex: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center', height: 100, backgroundColor: 'white' }}>
                        <Ionicons
                            name="eye-outline" size={30} />
                        <Text
                            style={{ marginTop: 5, fontWeight: 'bold' }}>MONITOREO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center', height: 100, backgroundColor: 'white' }}>
                        <Ionicons name="stats-chart-outline" size={30} />
                        <Text style={{ marginTop: 5, fontWeight: 'bold' }}>REPORTES</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center', height: 100, backgroundColor: 'white' }}>
                        {/* <Ionicons name="book" size={24} />
                        <Text style={{ marginLeft: 10 }}>MATRICULA</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center', height: 100, backgroundColor: 'white' }}>
                        {/* <Ionicons name="book" size={24} />
                        <Text style={{ marginLeft: 10 }}>MONITOREO</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center', height: 100, backgroundColor: 'white' }}>
                        {/* <Ionicons name="book" size={24} />
                        <Text style={{ marginLeft: 10 }}>REPORTES</Text> */}
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

export default HomeScreen;
