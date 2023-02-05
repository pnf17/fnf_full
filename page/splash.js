import { ImageBackground, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useEffect } from 'react';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout( () => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/logo_fnf_splash.png')}
      style={styles.background}>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
