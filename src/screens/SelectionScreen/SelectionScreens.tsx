import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '@assets/colors/Colors';

const SelectionScreens = ({data}: any) => {
  const {
    title,
    annotation,
    eventRating,
    showLengthInMinutes,
    cast,
    director,
    genre,
    bannerUrl,
  } = data;
  
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
        <Text
            style={
              styles.titleText
            }>{`${title} (${eventRating})`}</Text>
          <View style={styles.textContainer}>
          <Text style={styles.text}>{`Genre: ${genre}`}</Text>
          <Text
            style={
              styles.text
            }>{`Runtime:${showLengthInMinutes}`}</Text>
          <Text
            style={
              styles.text
            }>{`Cast:${cast}`}</Text>
          <Text
            style={styles.text}>{`Director: ${director}`}</Text>
          <Text
            style={styles.text}>{`SYNOPSIS: ${annotation}`}</Text>
            </View>
            </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectionScreens;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  imageContainer: {
    marginTop: -50,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  textContainer:{
    marginHorizontal: 20,
  },
  titleText: {
    width: 150,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 3,
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
  },
});
