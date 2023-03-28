import React, { useState } from 'react'
import { View, Button, useColorScheme, Alert, StyleSheet } from 'react-native';
import TextInputComp from '../components/TextInput';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { login } from '../services/services';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { signinObj } from '../types/types';

type LoginScreenProps = {
    navigation: NavigationProp<ParamListBase>;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [loginCredentials, setLoginCredentils] = useState<signinObj>({
        email: "",
        password: "",
        verify_email: true,
        verify_phone: false
    })

    const handleLogin = async (dataObj: signinObj) => {
        try {
            const res = await login(dataObj)
            console.log(res.data)

            navigation.navigate({ name: 'Home', params: { email: loginCredentials.email } })
        } catch (error) {
            Alert.alert("Invalid Credentials! Please try again...")
        }

    }

    return (
        <View style={styles.container}>
            <TextInputComp backgroundColor={backgroundStyle.backgroundColor} placeholder="email" setValue={setLoginCredentils} value={loginCredentials} input="email" />
            <TextInputComp backgroundColor={backgroundStyle.backgroundColor} placeholder="password" setValue={setLoginCredentils} value={loginCredentials} input="password" />
            <Button title="login" onPress={() => handleLogin(loginCredentials)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginScreen;