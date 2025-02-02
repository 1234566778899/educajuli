import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ReportCharts = ({ width, data }) => {
    const screenWidth = width;

    const lineChartData = {
        labels: Object.keys(data.reportsOverTime),
        datasets: [
            {
                data: Object.values(data.reportsOverTime),
                strokeWidth: 2, // Grosor de la línea
            },
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        decimalPlaces: 0, // Sin decimales
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16,
        },
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <LineChart
                data={lineChartData}
                width={screenWidth}
                height={100}
                chartConfig={chartConfig}
                bezier
                style={styles.chartStyle}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    chartTitle: {
        fontSize: 18,
        marginVertical: 10,
    },
    chartStyle: {
        marginVertical: 8,
        borderRadius: 16,
    },
});

export default ReportCharts;