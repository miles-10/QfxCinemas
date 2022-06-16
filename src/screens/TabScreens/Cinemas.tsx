import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, {FC, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestCinemas } from '@services/redux/movie/Cinemas/cinemas.action';
import Card from '@components/Card';
import {Api} from '@services/api/MovieApi';

interface shows {
  renderItem: any;
}
const Cinemas: FC<shows> = (props: any) => {
  const dispatch = useDispatch();

  const cinemas = useSelector((state: any) => {
    // console.log('cinemas',state.cinema.cinemas);
    return state.cinema.cinemas;
  });

  // console.log('Title', nowShowing[0].bannerUrl);
  useEffect(()=>{
    dispatch(requestCinemas());

  },[])
  
  return (
    <SafeAreaView>
      <View>
        <FlatList 
          style={styles.flatList}
          data={cinemas}
          keyExtractor={(show, index) => 'key' + index}
          numColumns={2}
          renderItem={(show: any) => {
            console.log('check',show.item.showID);
            return(
              <>
              <Text>{show.item.theatreName}</Text>
              <Card 
                id={show.item.events.id}
                companyid={show.item.events.theatreId}
                urlToImage={`${Api}${show.item.events.thumbnailUrl}`}
                title={show.item.events.name}
                eventRating={show.item.events.eventRating}
              />
              </>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Cinemas

const styles = StyleSheet.create({
  flatList: {

  }
})