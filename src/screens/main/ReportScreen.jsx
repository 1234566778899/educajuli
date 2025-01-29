import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ReportCharts from '../../charts/ReportCharts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReportScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#181818', position: 'relative' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ backgroundColor: '#160076', borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginTop: 30, padding: 10, gap: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16, marginLeft: 20 }}>ESPECIALISTA</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ReportCharts width={200} />
                    </View>
                </View>
                <View style={{ backgroundColor: '#0B10AA', borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginTop: 30, padding: 10, gap: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16, marginLeft: 20 }}>IE</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ReportCharts width={200} />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: '#1D1833', position: 'absolute', marginTop: 30, bottom: 0, padding: 20, paddingVertical: 30, width: '100%', borderRadius: 20 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View>
                        <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Vista General</Text>
                        <Text style={{ color: 'white' }}>Cantidad de fichas elaboradas</Text>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="ellipsis-horizontal" size={30} color={'white'} />
                    </TouchableOpacity>
                </View>
                <ReportCharts width={500} />
            </View>

        </View>
    );
};

export default ReportScreen;
