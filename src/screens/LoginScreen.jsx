import * as React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { TextInput, Button, Text, DefaultTheme } from 'react-native-paper';
import { Colors } from '../constants/colors';
import { Image } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SafeAreaView style={{ backgroundColor: '#181818', flex: 1 }}>
            <Image src='https://i.pinimg.com/736x/f1/85/75/f18575249deb327b7b60c38d2ea8f0f1.jpg' style={{ height: 200 }} />

            <ScrollView style={{
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
                    label="Usario"
                    theme={{
                        colors: {
                            ...DefaultTheme.colors,
                            accent: 'white',
                            background: Colors.secondary,
                            primary: '#F1F1F1',
                            placeholder: 'white'
                        }
                    }}
                    value={email}
                    onChangeText={setEmail}
                    style={{ marginTop: 50, backgroundColor: '#1E1E1E' }}
                    mode="outlined"
                    left={<TextInput.Icon icon="email" />}
                    textColor="white"
                />

                {/* Input de contraseña con icono */}
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
                    secureTextEntry
                    style={{ marginTop: 40, backgroundColor: '#1E1E1E' }}
                    mode="outlined"
                    left={<TextInput.Icon icon="lock" />}
                    textColor="white"
                />

                <Button
                    mode="text"
                    labelStyle={{ color: 'white' }}
                    onPress={() => console.log('Olvidé mi contraseña')}
                    style={{ alignSelf: 'flex-end', marginTop: 10 }}
                >
                    ¿Se olvidó su contraseña?
                </Button>

                <Button
                    mode="contained"
                    onPress={() => console.log('Ingresar')}
                    buttonColor={Colors.primary}
                    textColor="black"
                    style={{ paddingVertical: 5, marginTop: 20 }}
                    labelStyle={{ fontWeight: 'bold' }}
                >
                    Ingresar
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;