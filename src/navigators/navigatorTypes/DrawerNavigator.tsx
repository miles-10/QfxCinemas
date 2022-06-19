import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Colors from '@assets/colors/Colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LogoDisplayScreen from '@screens/DrawerScreens/LogoDisplay';
// import HomeScreen from '@screens/DrawerScreens/Home';
import TopTabNavigator from '@navigators/navigatorTypes/TopTabNavigator';
import LoginScreen from '@screens/DrawerScreens/Login';
import LocationsScreen from '@screens/DrawerScreens/Locations';
import SupportScreen from '@screens/DrawerScreens/Support';
import Header from '@components/CustomHeader/Header';
import MyProfileScreen from '@screens/DrawerScreens/MyProfile';
import HeaderWrapper from '@utility/hoc/HeaderWrapper';
import HomeWrapper from '@components/Wrapper/Wrapper';
import LoginWrapper from '@components/Wrapper/LoginWrapper';
import LocationWrapper from '@components/Wrapper/LocationWrapper';
import SupportWrapper from '@components/Wrapper/SupportWrapper';
import ProfileWraper from '@components/Wrapper/ProfileWraper';
import CustomDrawer from '@components/CustomDrawer/CustomDrawer';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '@components/context/AuthContext';
import { useContext } from 'react';


const Drawer = createDrawerNavigator();



const App = () => {
  const {userInfo} = useContext(AuthContext);
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          drawerStyle: {
            backgroundColor: Colors.drawerDown,
            alignContent: 'center',
          },
          drawerLabelStyle: {
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: '400',
          },
          headerShown: false,
        }}>
        
        <Drawer.Screen name="Home" component={HomeWrapper} options={{
          drawerIcon: ({color}) => (
            <View style={styles.drawer}>
            <MIcons name="home" size={40} color={'black'} />
            </View>
          ),
        }}/>
            {userInfo ? (<Drawer.Screen name="MyProfile" component={ProfileWraper} options={{
          drawerIcon: ({color}) => (
            <View style={styles.drawer}>
            <EvilIcon name="user" size={45} color={'black'} />
            </View>
          ),
        }}/>): null}

        {userInfo ? null :(<Drawer.Screen name="Login" component={LoginWrapper} options={{
          drawerIcon: ({color}) => (
            <View style={styles.drawer}>
            <AntIcon name="login" size={35} color={'black'} />
            </View>
          ),
        }}/>)}
        <Drawer.Screen name="Locations" component={LocationWrapper} options={{
          drawerIcon: ({color}) => (
            <View style={styles.drawer}>
            <EvilIcon name="location" size={45} color={color} />
            </View>
          ),
        }}/>
        <Drawer.Screen name="Support" component={SupportWrapper} options={{
          drawerIcon: ({color}) => (
            <View style={styles.drawer}>
            <FontIcon name="headset" size={34} color={color} />
            </View>
          ),
        }}/>
      </Drawer.Navigator>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#FFFFFF",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.drawerTop,
    borderRadius: 100,
  }
})
