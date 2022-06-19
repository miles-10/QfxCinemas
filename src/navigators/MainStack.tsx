import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '@screens/SplashScreen';
import DrawerNavigator from '@navigators/navigatorTypes/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetailsWrapper from '@components/Wrapper/MovieDetailsWrapper';
import LoginWrapper from '@components/Wrapper/LoginWrapper';
import SelectionWraper from '@components/Wrapper/SelectionWrapper';
const Stack = createStackNavigator();

const MyStack = () => {
const [showSplashScreen, setshowSplashScreen] = useState(true);

useEffect(() => {
    setTimeout(() => {
        setshowSplashScreen(false);
    }, 6000)
},[]);

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showSplashScreen ? (
      <Stack.Screen name="Home" component={SplashScreen} />) : null}
      <Stack.Screen name="Notifications" component={DrawerNavigator} />
      <Stack.Screen name="MovieDetailsWrapper" component={MovieDetailsWrapper} />
      <Stack.Screen name="LoginWrapper" component={LoginWrapper} />
      <Stack.Screen name="Selection" component={SelectionWraper} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default MyStack;