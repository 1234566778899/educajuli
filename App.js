import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

