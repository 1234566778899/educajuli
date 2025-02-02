import { SafeAreaView, ScrollView, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';
import { TextInput, Button, Text, DefaultTheme } from 'react-native-paper';
import { Colors } from '../constants/colors';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CONFIG } from '../config';
import { SesionContext } from '../contexts/SesionContextScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Nuevo estado para mostrar/ocultar contraseña
    const { user, setUser } = useContext(SesionContext);
    const navigation = useNavigation();

    const login = () => {
        if (username.trim() == '' || password.trim() == '') return alert('Debe completar todos los campos');
        setLoading(true);
        axios.post(`${CONFIG.uri}/api/users/login`, { username, password })
            .then(res => {
                setUser(res.data);
                AsyncStorage.setItem('user', JSON.stringify(res.data));
                setLoading(false);
                navigation.navigate('home');
            })
            .catch(error => {
                setLoading(false);
                Alert.alert(
                    'Error',
                    error.response.data.error,
                    [
                        {
                            text: 'Intentar de nuevo',
                            onPress: () => { }
                        }
                    ]
                );
            });
    };

    useEffect(() => {
        if (user) {
            navigation.navigate('home');
        }
    }, [user]);

    return (
        <SafeAreaView style={{ backgroundColor: '#181818', flex: 1 }}>
            <ScrollView>
                <Image src='https://i.pinimg.com/736x/f1/85/75/f18575249deb327b7b60c38d2ea8f0f1.jpg' style={{ height: 250 }} />

                <View style={{
                    borderTopLeftRadius: 50,
                    transform: [{ translateY: -50 }],
                    backgroundColor: '#181818',
                    flex: 1,
                    paddingHorizontal: 20
                }}>
                    <Text style={{ color: 'white', fontSize: 40, alignSelf: 'center', fontWeight: 'bold', marginTop: 60 }}>
                        EDUCAJULI
                    </Text>
                    <Text style={{ color: '#8F8F8F', alignSelf: 'center' }}>MONITOREO DOCENTE</Text>
                    <TextInput
                        label="Usuario"
                        theme={{
                            colors: {
                                ...DefaultTheme.colors,
                                accent: 'white',
                                background: Colors.secondary,
                                primary: '#F1F1F1',
                                placeholder: 'white'
                            }
                        }}
                        value={username}
                        onChangeText={setUsername}
                        style={{ marginTop: 50, backgroundColor: '#1E1E1E' }}
                        mode="outlined"
                        left={<TextInput.Icon icon="email" />}
                        textColor="white"
                    />
                    <TextInput
                        label="Contraseña"
                        value={password}
                        theme={{
                            colors: {
                                accent: 'white',
                                background: Colors.secondary,
                                text: 'white',
                                primary: '#F1F1F1'
                            }
                        }}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword} // Cambia según el estado showPassword
                        style={{ marginTop: 40, backgroundColor: '#1E1E1E' }}
                        mode="outlined"
                        left={<TextInput.Icon icon="lock" />}
                        right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />} // Ícono para alternar visibilidad
                        textColor="white"
                    />

                    <Button
                        mode="text"
                        labelStyle={{ color: 'white' }}
                        onPress={() => { }}
                        style={{ alignSelf: 'flex-end', marginTop: 10 }}
                    >
                        ¿Se olvidó su contraseña?
                    </Button>

                    <TouchableOpacity
                        style={{
                            paddingVertical: 5,
                            marginTop: 20,
                            backgroundColor: loading ? '#555' : Colors.primary,
                            paddingVertical: 17,
                            borderRadius: 5
                        }}
                        onPress={login}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Ingresar</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;