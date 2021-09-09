import React from 'react';
import { View, Tex, StyleSheet } from 'react-native';

const Home = () => (
    <View style={styles.container}>
        <Text>Home page</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;
