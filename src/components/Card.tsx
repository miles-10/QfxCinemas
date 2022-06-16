import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react"; 
import { useNavigation } from '@react-navigation/native';

interface fiat {
    title: string;
    urlToImage: any;
    eventRating: any;
    id?: any;
    companyid?: any;
}

const card: FC<fiat> = ({title, urlToImage, id, eventRating, companyid}) => {
        const navigation = useNavigation(); 
        const handleOnPress = () => {
            return navigation.navigate('MovieScreen', {id});
        }

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity  onPress={handleOnPress}>
                <Image style={styles.image} source={{uri: urlToImage}} />
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{eventRating}</Text>
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