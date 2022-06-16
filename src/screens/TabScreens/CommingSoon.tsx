import { StyleSheet, Text, View,FlatList, Image, SafeAreaView} from 'react-native'
import React,{FC, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestCommingSoon } from '@services/redux/movie/CommingSoon/comming.action';
import Card from '@components/Card/Card';
import {Api} from '@services/api/MovieApi';

interface soon {
  renderItem: any;
}
const CommingSoon: FC<soon> = () => {
  const dispatch = useDispatch();

  const commingSoon = useSelector((state: any) => {
    return state.soon.commingSoon;
  });

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
            return(
              <Card 
                id={show.item.eventID??show.item.id}
                urlToImage={`${Api}${show.item.thumbnailUrl}`}
                title={show.item.name}
                eventRating={show.item.eventRating}
                data={show.item}
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