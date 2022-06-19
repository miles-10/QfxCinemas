import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {TextInput} from 'react-native-paper';
import Colors from '@assets/colors/Colors';

interface input {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  onFocus?: void;
  icon?: any;
}
const InputText: FC<input> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  onFocus,
  icon,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconcontainer}>{icon}</View>
      <View style={styles.inputview}>
        <TextInput
          selectionColor={Colors.drawerTop}
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          style={styles.textinput}
          {...props}
        />
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginBottom: 1,
    marginLeft: '4%',
  },
  iconcontainer: {
    flexDirection: 'row',
    marginRight: 10,
    backgroundColor: Colors.circle,
    height: 70,
    width: 70,
    borderRadius: 10000,
    position: 'absolute',
    marginbottom: 8,
    marginTop: -6,
    zIndex: 1,
  },
  inputview: {
    width: '80%',
    alignSelf: 'center',
  },
  textinput: {
    height: 50,
    marginBottom: 5,
    color: Colors.drawerImage,
    backgroundColor: Colors.drawerDown,
    justifyContent: 'center',
    textAlign: 'center',
    caretColor: Colors.drawerImage,
  },
});
