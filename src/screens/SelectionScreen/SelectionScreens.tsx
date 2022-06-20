import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/Colors';
import Toast from 'react-native-simple-toast';

const SelectionScreens = ({title}: any) => {
  const toast = () => {
    Toast.show('Coming Soon');
  }
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={toast}>
      <Text style={styles.text}>SelectionScreens</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectionScreens;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    marginTop: 250,
    backgroundColor: Colors.background,
  },
  text: {
    fontSize: 35,
    fontWeight: '400',
    color: 'white',
  },
});
