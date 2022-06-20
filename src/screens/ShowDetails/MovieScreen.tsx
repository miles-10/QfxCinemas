import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import YoutubeReg from '@utility/youtubeRegex/YoutubeReg';
import {useNavigation} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '@assets/colors/Colors';
import {AuthContext} from '@components/context/AuthContext';

const MovieScreen = ({data}: any) => {
  const {userInfo} = useContext(AuthContext);
  const navigation: any = useNavigation();

  const hanldleScreen = () => {
    {
      userInfo
        ? navigation.navigate('Selection')
        : navigation.navigate('Login');
    }
  };
  const {
    title,
    annotation,
    eventRating,
    mediaPlayerTrailerURL,
    showLengthInMinutes,
    cast,
    director,
    companyid,
    genre,
  } = data;

  const url = YoutubeReg(mediaPlayerTrailerURL);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <YoutubePlayer height={300} play={false} videoId={url} />
        <View style={styles.imageContainer}>
          <Text style={styles.titleText}>{`${title} (${eventRating})`}</Text>
          <View style={styles.ticket}>
            {companyid ? (
              <TouchableOpacity onPress={hanldleScreen}>
                <View style={styles.wrap}>
                  <FontIcon name="ticket" size={22} color="#000000" />
                </View>
                <Text style={styles.ticketText}>Buy/Reserve Ticket</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{`Genre: ${genre}`}</Text>
          <Text style={styles.text}>{`Runtime:${showLengthInMinutes}`}</Text>
          <Text style={styles.text}>{`Cast:${cast}`}</Text>
          <Text style={styles.text}>{`Director: ${director}`}</Text>
          <Text style={styles.text}>{`SYNOPSIS: ${annotation}`}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  imageContainer: {
    marginTop: -50,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  textContainer: {
    marginHorizontal: 20,
  },
  titleText: {
    width: 150,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color:'#000000',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 3,
    color: '#000000',
  },
  ticket: {
    flexDirection: 'row',
    marginTop: 9,
    marginLeft: 25,
  },

  wrap: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: Colors.drawerDown,
    backgroundColor: '#FFFFFF',
  },
  ticketText: {
    fontSize: 10,
    marginLeft: 40,
    bottom: 22,
    color: '#000000',
  },
});
