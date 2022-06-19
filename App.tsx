import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import DrawerNavigator from '@navigators/navigatorTypes/DrawerNavigator';
import TopTabNavigator from '@navigators/navigatorTypes/TopTabNavigator';
import Header from '@components/CustomHeader/Header'
import MyStack from '@navigators/MainStack';
import store from '@services/redux/store';
import { Provider } from 'react-redux';
import { AuthProvider } from '@components/context/AuthContext';
import checkAppVersion from '@utility/versionCheck/VersionCheck';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      checkAppVersion();
    }, 6000);
    
  })
  return (
    <AuthProvider>
    <Provider store={store}>
    <MyStack />
  </Provider>
  </AuthProvider>
  )
}

export default App

const styles = StyleSheet.create({})