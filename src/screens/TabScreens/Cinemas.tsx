import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestCinemas} from '@services/redux/movie/Cinemas/cinemas.action';
import Card from '@components/Card/Card';
import {Api} from '@services/api/MovieApi';
import Colors from '@assets/colors/Colors';

interface shows {
  renderItem: any;
}
const Cinemas: FC<shows> = (props: any) => {
  const dispatch = useDispatch();

  const cinemas = useSelector((state: any) => {
    return state.cinema.cinemas;
  });

  useEffect(() => {
    dispatch(requestCinemas());
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <FlatList
          data={cinemas}
          keyExtractor={(show, index) => 'key' + index}
          renderItem={(show: any) => {
            return (
              <>
                <Text style={styles.place}>{show.item.theatreName}</Text>
                <FlatList
                  data={show.item.events}
                  keyExtractor={(showed, index) => 'key' + index}
                  numColumns={2}
                  renderItem={(show: any) => {
                    return (
                      <Card
                        id={show.item.eventID}
                        urlToImage={`${Api}${show.item.thumbnailUrl}`}
                        title={show.item.name}
                        eventRating={show.item.eventRating}
                        mediaPlayerTrailerURL={show.item.mediaLink}
                        genre={show.item.genre}
                        showLengthInMinutes={show.item.showLengthInMinutes}
                        director={show.item.director}
                        cast={show.item.cast}
                        annotation={show.item.annotation}
                        companyid={show.item.theatreID}
                      />
                    );
                  }}
                />
              </>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cinemas;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.background,
    height: '100%',
  },
  place: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
