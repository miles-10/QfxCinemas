import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '@assets/colors/Colors'
import logo from '@assets/image/logo.png';

const SplashScreen = () => {

  return (
    <View style={styles.mainContainer}>
        <Image source={logo} style={styles.logo}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 150,
        width: 150,
    }
})