import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/Colors';
import logo from '@assets/image/logo.png';

const SplashScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.splash}>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 110,
  },
  logo: {
    height: 50,
    width: 100,
  },
});
