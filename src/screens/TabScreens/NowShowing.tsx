import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestNowShowing} from '@services/redux/movie/NowShowing/showing.action';
import Card from '@components/Card/Card';
import {Api} from '@services/api/MovieApi';
import Colors from '@assets/colors/Colors'

interface fiat {
  renderItem: any;
}

const NowShowing: FC<fiat> = () => {
  const dispatch = useDispatch();

  const nowShowing = useSelector((state: any) => {
    return state.showing.nowShowing;
  });

  useEffect(() => {
    dispatch(requestNowShowing());
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <FlatList
          data={nowShowing}
          keyExtractor={(show, index) => 'key' + index}
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
      </View>
    </SafeAreaView>
  );
};

export default NowShowing;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.background
  },
});
