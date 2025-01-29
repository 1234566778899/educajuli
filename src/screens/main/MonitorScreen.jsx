import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const MonitorScreen = ({ navigation }) => {
    const w = 35;
    return (
        <View style={{ flex: 1, backgroundColor: '#181818' }}>
            <Text style={{ alignSelf: 'center', color: 'white', marginTop: 30 }}>01 de Enero de 2025</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 40 }}>
                <View style={{ marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performance')}
                            style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-start' }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end', marginTop: 7 }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-start', marginTop: 7 }}>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: w, height: w, borderColor: 'white', borderWidth: 2, borderRadius: 7 }}>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
            <View style={{ flexDirection: 'row', gap: 50, justifyContent: 'center', marginTop: 30 }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, borderWidth: 2, borderColor: 'white' }}></View>
                    <Text style={{ color: 'white', marginTop: 10 }}>Pendiente</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: 'white' }}></View>
                    <Text style={{ color: 'white', marginTop: 10 }}>Completado</Text>
                </View>
            </View>
            <View style={{ marginTop: 20, padding: 20, backgroundColor: '#303030', borderRadius: 20 }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 22, paddingVertical: 13, backgroundColor: 'white' }}>
                        <Text style={{ textAlign: 'center' }}>Código</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 22, paddingVertical: 13, backgroundColor: 'white' }}>
                        <Text style={{ textAlign: 'center' }}>Código</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 22, paddingVertical: 13, backgroundColor: 'white' }}>
                        <Text style={{ textAlign: 'center' }}>Área</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 22, paddingVertical: 13, backgroundColor: 'white' }}>
                        <Text style={{ textAlign: 'center' }}>Grado</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 22, paddingVertical: 13, backgroundColor: 'white' }}>
                        <Text style={{ textAlign: 'center' }}>Desempeño</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                    <TouchableOpacity style={{ flex: 1, borderRadius: 22, paddingVertical: 13, backgroundColor: 'white' }}>
                        <Text style={{ textAlign: 'center' }}>Especialista</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: '#1E1E1E', flexDirection: 'row', bottom: 0, position: 'absolute' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('report')}
                    style={{ flex: 1, paddingVertical: 18 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Reporte</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFD946', paddingVertical: 18, flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ marginRight: 10, fontWeight: 'bold' }}>Grabar</Text>
                    <Ionicons name="save-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default MonitorScreen