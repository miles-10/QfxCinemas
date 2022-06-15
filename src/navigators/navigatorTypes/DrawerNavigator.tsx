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
import HeaderWrapper from '@utility/hoc/HeaderWrapper';
import HomeWrapper from '@components/Wrapper';
import LocationWrapper from '@components/LocationWrapper';
import SupportWrapper from '@components/SupportWrapper';

const Drawer = createDrawerNavigator();

const App = ({navigation}: any) => {
  
  // const HomeHeader = HeaderWrapper(TopTabNavigator);
  // const LoactionHeader = HeaderWrapper(LocationsScreen);
  // const SupportHeader = HeaderWrapper(SupportScreen);

  return (
    <>
      <Drawer.Navigator 
       initialRouteName="Home"
       screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary
        },

        headerShown: false,
      }}>
        <Drawer.Screen name="Logo" component={LogoDisplayScreen} />
        <Drawer.Screen name="Home" component={HomeWrapper} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Locations" component={LocationWrapper} />
        <Drawer.Screen name="Support" component={SupportWrapper} />
      </Drawer.Navigator>
      </>
  );
}

export default App;
