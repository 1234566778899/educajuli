import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import IndexScreen from './src/screens/main/IndexScreen';
import MonitorScreen from './src/screens/main/MonitorScreen';
import PerformanceScreen from './src/screens/main/PerformanceScreen';
import ReportScreen from './src/screens/main/ReportScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Iniciar sesión' }}
          />
          <Stack.Screen
            name="home"
            component={IndexScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="monitor"
            component={MonitorScreen}
            options={{ title: 'Desempeños' }}
          />
          <Stack.Screen
            name="performance"
            component={PerformanceScreen}
            options={{ title: 'Desempeño 1' }}
          />
          <Stack.Screen
            name="report"
            component={ReportScreen}
            options={{ title: 'Reporte' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

