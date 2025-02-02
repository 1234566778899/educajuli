import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ReportCharts from '../../charts/ReportCharts';
import axios from 'axios';
import { CONFIG } from '../../config';
import { SesionContext } from '../../contexts/SesionContextScreen';

const ReportScreen = () => {
    const [reportData, setReportData] = useState(null);
    const { user } = useContext(SesionContext);
    useEffect(() => {
        const fetchReportData = async () => {
            try {
                const response = await axios.post(`${CONFIG.uri}/api/monitors/report`, {
                    dni: user.dni
                });
                setReportData(response.data);
            } catch (error) {
                alert('Error en el servidor');
            }
        };

        fetchReportData();
    }, []);


    return (
        <View style={{ flex: 1, backgroundColor: '#181818', position: 'relative' }}>
            {
                reportData && reportData.totalReports > 0 && (
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={{ backgroundColor: '#3C3C3C', borderRadius: 10, marginTop: 30, padding: 10, gap: 10 }}>
                            <View >
                                <Text style={{ color: 'white', fontSize: 16, marginLeft: 20 }}>ESPECIALISTA</Text>
                            </View>
                            <View >
                                <ReportCharts width={400} data={reportData} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#3C3C3C', borderRadius: 10, marginTop: 30, padding: 10, gap: 10 }}>
                            <View >
                                <Text style={{ color: 'white', fontSize: 16, marginLeft: 20 }}>IE</Text>
                            </View>
                            <View >
                                <ReportCharts width={400} data={reportData} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#3C3C3C', borderRadius: 10, marginTop: 30, padding: 10, gap: 10 }}>
                            <View >
                                <Text style={{ fontSize: 17, color: 'white', fontWeight: 'bold' }}>Vista General</Text>
                                <Text style={{ color: 'white' }}>Cantidad de fichas elaboradas</Text>
                            </View>
                            <View >
                                <ReportCharts width={400} data={reportData} />
                            </View>
                        </View>
                    </View>
                )
            }
            {
                reportData && reportData.totalReports <= 0 && (
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>No se encontró registros</Text>
                    </View>
                )
            }
            {
                !reportData && (
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Cargando..</Text>
                    </View>
                )
            }
        </View>
    );
};

export default ReportScreen;