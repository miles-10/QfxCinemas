import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigator from '@navigators/navigatorTypes/DrawerNavigator';
import TopTabNavigator from '@navigators/navigatorTypes/TopTabNavigator';
import Header from '@components/CustomHeader/Header'
import MyStack from '@navigators/MainStack';
import store from '@services/redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
    <MyStack />
  {/* //  <DrawerNavigator />
  //  <TopTabNavigator />
  // <Header /> */}
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})