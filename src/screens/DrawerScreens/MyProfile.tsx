import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '@components/context/AuthContext';
import Colors from '@assets/colors/Colors';

const MyProfile = ({title}: any) => {
  const {userInfo} = useContext(AuthContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textcontainer}>
      <Text style={styles.texttitle}>Your Profile:</Text>
      <Text style={styles.text}>{userInfo.data.name}</Text>
      <Text style={styles.text}>{userInfo.data.mobile}</Text>
      <Text style={styles.text}>{userInfo.data.email}</Text>
      <Text style={styles.text}>{userInfo.data.location}</Text>
      
      </View>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.background,
    height: '100%',
    
  },
  textcontainer: {
    alignSelf: 'center',
    marginTop: 100,
    width: '90%',
    padding: 60,
    backgroundColor: '#FFFFFF'
  },
  texttitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  }
})