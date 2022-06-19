import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '@assets/colors/Colors';
import React, {FC} from 'react';

interface button {
  text: string;
  onPress: () => void;
}
const CustomButton: FC<button> = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    btnStyle: {
        marginTop: 20,
        height: 50,
        backgroundColor: Colors.drawerImage,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
    },
    textStyle: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '400',
        color: '#FFFFFF',
    },
});
