import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '@screens/SplashScreen';
import DrawerNavigator from '@navigators/navigatorTypes/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
const [showSplashScreen, setshowSplashScreen] = useState(true);

useEffect(() => {
    setTimeout(() => {
        setshowSplashScreen(false);
    }, 4000)
},[]);

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* {showSplashScreen ? (
      <Stack.Screen name="Home" component={SplashScreen} />) : null} */}
      <Stack.Screen name="Notifications" component={DrawerNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default MyStack;