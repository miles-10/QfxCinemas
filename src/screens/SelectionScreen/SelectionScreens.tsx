import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/Colors';

const SelectionScreens = ({title}: any) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>SelectionScreens</Text>
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
