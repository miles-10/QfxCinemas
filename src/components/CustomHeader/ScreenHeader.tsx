import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Logo from '@assets/image/logo.png'
import { Surface } from 'react-native-paper';
import Colors from '@assets/colors/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
const navigation = useNavigation();
  return (
    <SafeAreaView>
    <Surface style={styles.header}>
        <View style={styles.view}>
            {<TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name="menu" size={24} color={Colors.iconColor}/>
            </TouchableOpacity>}
        </View>
        <View style={styles.viewLogo}>
            {<Image source={Logo} style={styles.logo} /> }
        </View>
    </Surface>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 50,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.primary
    },
    view: {
        flex: 1,
        margin: 10,
        marginLeft: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewLogo: {
        flex: 1,
        margin: 10,
        marginRight: 260,
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewRight: {
        flex: 1,
        margin: 10,
        // marginLeft: 270,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
    },
    logo: {
        height: 29,
        width: 60,
    }
})