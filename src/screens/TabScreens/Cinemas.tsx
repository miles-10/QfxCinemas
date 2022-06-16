import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, {FC, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestCinemas } from '@services/redux/movie/Cinemas/cinemas.action';
import Card from '@components/Card/Card';
import {Api} from '@services/api/MovieApi';

interface shows {
  renderItem: any;
}
const Cinemas: FC<shows> = (props: any) => {
  const dispatch = useDispatch();

  const cinemas = useSelector((state: any) => {
    console.log('sag', state.cinema.cinemas)
    return state.cinema.cinemas;
  });

  useEffect(()=>{
    dispatch(requestCinemas());
  },[])
  console.log('make',cinemas);
  return (
    <SafeAreaView>
      <View>
        {/* <Text>{cinemas.theatreName}</Text> */}
        <FlatList 
          style={styles.flatList}
          data={cinemas}
          keyExtractor={(show, index) => 'key' + index}
          renderItem={(show: any) => {
            return(
              <>
              <Text>{show.item.theatreName}</Text>
              <FlatList 
              style={styles.flatList}
              data={show.item.events}
              keyExtractor={(showed, index) => 'key' + index}
              numColumns={2}
              renderItem={(showed: any) => {
                return(
                  <Card 
                  id={showed.item.eventId}
                  companyid={showed.item.theatreId}
                  urlToImage={`${Api}${showed.item.thumbnailUrl}`}
                  title={showed.item.name}
                  eventRating={showed.item.eventRating}
                  />
                )
              }
            }
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