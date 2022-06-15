import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, {FC, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestNowShowing } from '@services/redux/movie/NowShowing/showing.action';
import Card from '@components/Card';
import {baseUrl} from '@services/api/MovieApi';

interface fiat {
  renderItem: any;
}


const NowShowing: FC<fiat> = () => {
  
  const dispatch = useDispatch();

  const nowShowing = useSelector((state: any) => {
    console.log('error check',state.nowShowing.nowShowing);
    return state.nowShowing.nowShowing;
  });

  // console.log('Title', nowShowing[0].bannerUrl);
  useEffect(()=>{
    dispatch(requestNowShowing());

  },[])
  return (
    <SafeAreaView>
      <View>
        <FlatList 
          style={styles.flatList}
          data={nowShowing}
          keyExtractor={(show, index) => 'key' + index}
          numColumns={2}
          renderItem={(show: any) => {
          console.log('Checkit', show.item.thumbnailUrl)
            return(
              <Card 
                urlToImage={`${baseUrl}${show.item.thumbnailUrl}`}
                title={show.item.name}
              />
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default NowShowing

const styles = StyleSheet.create({
  flatList: {

  }
})