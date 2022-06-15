import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";

// interface fiat {
//     title: string;
//     urlToImage: any;
//     navigation: any;
// }

const card = ({title, urlToImage, navigation, id} : any) => {
    const handleOnPress = () => {

    }
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.image} onPress={handleOnPress}>
                <Image source={{uri: urlToImage}} />
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )

}

export default card;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 10,
    },
    image: {
        alignSelf: 'center',
        flex: 1,
        width: 180,
        height: 250,
    },
    text: {
        marginTop: 10,
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        flexDirection: 'row',
        margin: 5,
    }

})