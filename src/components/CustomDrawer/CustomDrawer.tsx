import React, { useContext } from "react";
import { SafeAreaView, View, TouchableOpacity, Image, Text,StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Logo from '@assets/image/logo.png';
import Colors from "@assets/colors/Colors";
import AntIcon from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '@components/context/AuthContext';
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomDrawer = (props: any) => {
    const {userInfo, setUserInfo, setUserToken} = useContext(AuthContext);
    const logouthander = () => {
       setUserToken('');
       setUserInfo(null);
       AsyncStorage.removeItem('UserToken');
     }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                {userInfo ? (<Text style={styles.textinfo}>{userInfo.data.name}</Text>)
                : (<Image style={styles.logo} source={Logo} />)}
            </View>
            <View style={styles.itemlist}>
                <DrawerItemList {...props} />
            </View>
            <View style={styles.opacity}>
                {userInfo ? (<TouchableOpacity onPress={logouthander}>
                    <View style={styles.iconBody}>
                    <AntIcon style={styles.icon} name='logout' size={35} />
                    </View>
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>): null}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.drawerDown,
        height: "100%",
    },
    logoContainer: {
        height: 150,
        backgroundColor: Colors.drawerTop,
    },
    textinfo: {
        fontSize: 35,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 50,
        color: '#FFFFFF',
    },
    logo: {
        height: 70,
        width: "50%",
        alignSelf: "center",
        marginTop: 37,
    },
    itemlist: {
        flex: 1,
        marginTop: 10,
    },
    opacity: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    logout: {
        marginLeft: 90,
        marginBottom: 190,
        fontSize: 18,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    iconBody: {
        position: 'absolute',
        marginLeft: 5,
        width: 50,
        height: 50,
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: Colors.drawerTop,
        backgroundColor: '#FFFFFF',
    },
    icon: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 5,
        position: 'absolute',
    },
   
})

export default CustomDrawer;