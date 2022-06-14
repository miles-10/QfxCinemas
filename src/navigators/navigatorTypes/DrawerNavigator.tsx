import * as React from 'react';
import {Button, View} from 'react-native';
import Colors from '@assets/colors/Colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LogoDisplayScreen from '@screens/DrawerScreens/LogoDisplay';
// import HomeScreen from '@screens/DrawerScreens/Home';
import TopTabNavigator from '@navigators/navigatorTypes/TopTabNavigator';
import LoginScreen from '@screens/DrawerScreens/Login';
import LocationsScreen from '@screens/DrawerScreens/Locations';
import SupportScreen from '@screens/DrawerScreens/Support';
import Header from '@components/Header';

const Drawer = createDrawerNavigator();

export default function App({navigation}: any) {
  return (
    <>
    {/* <Header> */}
      <Drawer.Navigator 
       initialRouteName="Home"
       screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary
        },

        headerShown: false,
      }}>
        <Drawer.Screen name="Logo" component={LogoDisplayScreen} />
        <Drawer.Screen name="Home" component={TopTabNavigator} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Locations" component={LocationsScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator>
      {/* </Header> */}
      </>
  );
}
