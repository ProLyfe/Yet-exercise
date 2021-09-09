import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AuthForm from '../components/AuthForm';

const Login = () => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Image source={require('../assets/yet-logo.png')} style={styles.logo}/>
            <Text style={styles.text}>Login page</Text>
            <AuthForm title="Email" placeholder="Entrer votre email"/>
            <AuthForm title="Mot de passe" placeholder="Entrer votre mot de passe"/>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    logo: {
      height: 170,
      width: 170,
      marginTop: -70
    },
    text: {
        color: 'white'
    }
  });

export default Login;