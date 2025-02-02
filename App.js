import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import IndexScreen from './src/screens/main/IndexScreen';
import MonitorScreen from './src/screens/main/MonitorScreen';
import PerformanceScreen from './src/screens/main/PerformanceScreen';
import ReportScreen from './src/screens/main/ReportScreen';
import SesionContextScreen from './src/contexts/SesionContextScreen';
import ListSchoolScreen from './src/screens/ListSchoolScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TeacherListScreen from './src/screens/ListTeacherScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity } from 'react-native';
import CourseScreen from './src/screens/CourseScreen';
import GradeScreen from './src/screens/GradeScreen';
import ListVisitisScreen from './src/screens/main/ListVisitisScreen';
import ListRegisterScreen from './src/screens/main/ListRegisterScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <SesionContextScreen>
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
            <Stack.Screen
              name="schools"
              component={ListSchoolScreen}
              options={{ title: 'Seleccione un colegio' }}
            />
            <Stack.Screen
              name="teachers"
              component={TeacherListScreen}
              options={{ title: 'Seleccione un profesor' }}
            />
            <Stack.Screen
              name="courses"
              component={CourseScreen}
              options={{ title: 'Seleccione un curso' }}
            />
            <Stack.Screen
              name="grade"
              component={GradeScreen}
              options={{ title: 'Nivel educativo' }}
            />
            <Stack.Screen
              name="visits"
              component={ListVisitisScreen}
              options={{ title: '' }}
            />
            <Stack.Screen
              name="registers"
              component={ListRegisterScreen}
              options={{ title: '' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SesionContextScreen>

  );
}

