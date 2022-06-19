import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import NowShowingScreen from '@screens/TabScreens/NowShowing';
import CommingSoonScreen from '@screens/TabScreens/CommingSoon';
import CinemasScreen from '@screens/TabScreens/Cinemas';
import Colors from '@assets/colors/Colors';



const Tab = createMaterialTopTabNavigator();

 const MyTabs= () => {

  return (
    <Tab.Navigator
    screenOptions={{
      
      tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
      tabBarStyle: {backgroundColor: Colors.background,elevation: 0},
      tabBarActiveTintColor: Colors.activeTintColor,
      tabBarInactiveTintColor: Colors.inactiveTintColor,
    }}>
      <Tab.Screen name="NOW SHOWING" component={NowShowingScreen} />
      <Tab.Screen name="COMING SOON" component={CommingSoonScreen} />
      <Tab.Screen name="CINEMAS" component={CinemasScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;