import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigator from '@navigators/navigatorTypes/DrawerNavigator';
import TopTabNavigator from '@navigators/navigatorTypes/TopTabNavigator';
import Header from '@components/Header'
import MyStack from '@navigators/MainStack';

const App = () => {
  return (
    <MyStack />
  //  <DrawerNavigator />
  //  <TopTabNavigator />
  // <Header />
  )
}

export default App

const styles = StyleSheet.create({})