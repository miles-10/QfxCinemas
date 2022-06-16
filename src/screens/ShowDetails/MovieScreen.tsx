import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestNowShowing} from '@services/redux/movie/NowShowing/showing.action';
import axios from 'axios';



const MovieScreen = ({route}: any) => {
  
  const [details, setDetails] = useState<any>();

  // const dispatch = useDispatch();
  // const Datas = useSelector((state: any) => {
  //   return state.showing.nowShowing;
  // });

  useEffect(() => {
    // dispatch(requestNowShowing());
    if (route.params.id) {
      const response = getdata(route.params.id);
    }
  }, [route.params?.id]);

  const getdata = async (id: any) => {
    const detail = await axios.get(`https://staging.qfxcinemas.com:2005/api/public/Event?=${id}`);
    console.log('tt',detail.data.data);
    setDetails(detail.data.data);
  };
  return (
    <SafeAreaView>
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Text style={styles.text}>{`${details?.name}(${details?.eventRating})`}</Text>
        <Text style={styles.text}>{`Genre: ${details?.genre}`}</Text>
        <Text style={styles.text}>{`Runtime:${details?.showLengthInMinutes}`}</Text>
        <Text style={styles.text}>{`Cast:${details?.showLengthInMinutes}`}</Text>
        <Text style={styles.text}>{`Director: ${details?.director}`}</Text>
        <Text style={styles.text}>{`SYNOPSIS: ${details?.annotation}`}</Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  mainContainer: {

  },
imageContainer: {

},
image: {

},
text: {

}
});
