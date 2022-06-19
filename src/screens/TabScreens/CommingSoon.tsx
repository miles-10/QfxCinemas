import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestCommingSoon} from '@services/redux/movie/CommingSoon/comming.action';
import Card from '@components/Card/Card';
import {Api} from '@services/api/MovieApi';
import Colors from '@assets/colors/Colors';

interface soon {
  renderItem: any;
}
const CommingSoon: FC<soon> = () => {
  const dispatch = useDispatch();

  const commingSoon = useSelector((state: any) => {
    return state.soon.commingSoon;
  });

  useEffect(() => {
    dispatch(requestCommingSoon());
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <FlatList
          data={commingSoon}
          keyExtractor={(show, index) => 'key' + index}
          numColumns={2}
          renderItem={(show: any) => {
            return (
              <Card
                id={show.item.id}
                urlToImage={`${Api}${show.item.thumbnailUrl}`}
                title={show.item.name}
                eventRating={show.item.eventRating}
                mediaPlayerTrailerURL={show.item.mobileTrailerURL}
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

export default CommingSoon;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.background,
    height: '100%',
  },
});
