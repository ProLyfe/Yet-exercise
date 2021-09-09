import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AuthForm from '../components/AuthForm';
import FlatButton from '../components/FlatButton';

const Register = () => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Image source={require('../assets/yet-logo.png')} style={styles.logo}/>
            <View style={styles.inputContainer}>
                <AuthForm title="Email" placeholder="Entrer votre email"/>
                <AuthForm title="Mot de passe" placeholder="Entrer votre mot de passe"/>
            </View>
            <FlatButton backgroundColor="white" textColor="black" text="s'enregistrer"/>
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
      height: 150,
      width: 150,
      marginTop: -70
    },
    inputContainer: {
        marginTop: 10
    }
  });

export default Register;