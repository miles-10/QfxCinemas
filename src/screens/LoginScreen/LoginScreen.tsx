import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useContext} from 'react';
import Logo from '@assets/image/logo.png';
import Button from '@components/Button/Button';
import InputText from '@components/InputText/InputText';
import Colors from '@assets/colors/Colors';
import Feather from 'react-native-vector-icons/Feather';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import {AuthContext} from '@components/context/AuthContext';

const LoginScreen = ({title}: any) => {
  const {login} = useContext(AuthContext);
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoimage}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.fistView}>
          <InputText
            icon={
              <View>
                <Feather
                  style={styles.icon1}
                  color="#000000"
                  name="at-sign"
                  size={40}
                />
              </View>
            }
            value={data.username}
            placeholder="Email/Mobile Number"
            onChangeText={text => setData({...data, username: text})}
          />
        </View>
        <View style={styles.secondView}>
          <InputText
            icon={
              <View>
                <SimpleIcons
                  style={styles.icon1}
                  color="#000000"
                  name="key"
                  size={40}
                />
              </View>
            }
            value={data.password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setData({...data, password: text})}
          />
        </View>

        <Button
          onPress={() => {
            login(data);
          }}
          text="LOGIN"
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.background,
  },
  logoimage: {
    marginTop: 30,
    marginBottom: 40,
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 10000,
    backgroundColor: '#000000',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 38,
    width: '60%',
    height: '30%',
  },
  fistView: {
    marginBottom: 20,
  },
  secondView: {
    marginBottom: 10,
  },
  icon1: {
    left: 14,
    marginTop: 12,
  },
});
