import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AuthForm from '../components/AuthForm';

const Login = () => (
    <View style={styles.container}>
        <Image source={require('../assets/yet-logo.png')} style={styles.logo}/>
        <Text style={styles.text}>Login page</Text>
        <AuthForm placeholder="Email"/>
        <AuthForm placeholder="Mot de passe"/>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },
    logo: {
      height: 190,
      width: 190
    },
    text: {
        color: 'white'
    }
  });

export default Login;