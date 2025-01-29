import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
const PerformanceScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#181818', paddingHorizontal: 20 }}>
            <Text style={{ color: 'white', marginTop: 30, fontSize: 15 }}>Involucra efectivamente a los estudiantes en el proceso de aprendizaje</Text>
            <View style={{ marginTop: 30, backgroundColor: '#020F7F', height: 200, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <Ionicons name="school-outline" size={30} color={'white'} />
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>ASPECTOS</Text>
                    <Ionicons name="ellipsis-horizontal" size={30} color={'white'} />
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Acciones del docente para promover el interés y/o la participación de los estudiantes en las actividades de aprendizaje.</Text>
                </View>
            </View>
            <View style={{ marginTop: 15, backgroundColor: '#020F7F', height: 200, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFDA44', borderRadius: 20, padding: 3 }}>
                        <Ionicons name="add" size={24} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>EVIDENCIAS</Text>
                    <Ionicons name="ellipsis-horizontal" size={30} color={'white'} />
                </View>
                <View style={{ padding: 20, height: '60%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white' }}>Points this week</Text>
                </View>
            </View>
            <View style={{ marginTop: 15, backgroundColor: '#020F7F', height: 200, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#01D536', borderRadius: 20, padding: 3 }}>
                        <Ionicons name="checkmark" size={24} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>EVIDENCIAS</Text>
                    <Ionicons name="ellipsis-horizontal" size={30} color={'white'} />
                </View>
                <View style={{ padding: 20, height: '60%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: '#010B68', width: 50, borderRadius: 25, height: 50, justifyContent: 'center', alignContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>I</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#010B68', width: 50, borderRadius: 25, height: 50, justifyContent: 'center', alignContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>II</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#010B68', width: 50, borderRadius: 25, height: 50, justifyContent: 'center', alignContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>III</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#010B68', width: 50, borderRadius: 25, height: 50, justifyContent: 'center', alignContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>IV</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PerformanceScreen