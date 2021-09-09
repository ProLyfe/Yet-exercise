import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const AuthForm = ({ placeholder }) => (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="black"
            keyboardType="email-address"
            style={styles.input}
        />
);

const styles = StyleSheet.create({
    input: {
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 12,
        width: 240,
        marginTop: 30
    }
});


export default AuthForm;