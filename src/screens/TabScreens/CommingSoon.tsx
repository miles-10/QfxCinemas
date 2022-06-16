import { StyleSheet, Text, View,FlatList, Image, SafeAreaView} from 'react-native'
import React,{FC, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestCommingSoon } from '@services/redux/movie/CommingSoon/comming.action';
import Card from '@components/Card';
import {Api} from '@services/api/MovieApi';

interface soon {
  renderItem: any;
}
const CommingSoon: FC<soon> = () => {
  const dispatch = useDispatch();

  const commingSoon = useSelector((state: any) => {
    // console.log('commingsoon',state.soon.commingSoon);
    return state.soon.commingSoon;
  });

  // console.log('Title', nowShowing[0].bannerUrl);
  useEffect(()=>{
    dispatch(requestCommingSoon());

  },[])
  
  return (
    <SafeAreaView>
      <View>
        <FlatList 
          style={styles.flatList}
          data={commingSoon}
          keyExtractor={(show, index) => 'key' + index}
          numColumns={2}
          renderItem={(show: any) => {
          console.log('Checkit', show.item.thumbnailUrl)
            return(
              <Card 
                urlToImage={`${Api}${show.item.thumbnailUrl}`}
                title={show.item.name}
                eventRating={show.item.eventRating}
              />
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default CommingSoon

const styles = StyleSheet.create({
  flatList: {

  },
})