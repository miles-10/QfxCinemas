import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestNowShowing } from '@services/redux/movie/NowShowing/showing.action';

const NowShowing = () => {

  const dispatch = useDispatch();

  const nowShowing = useSelector((state: any) => {
    // console.log(state.nowShowing.nowShowing);
    // return state.movie.movies
  });

  useEffect(()=>{
    dispatch(requestNowShowing());

  },[])
  return (
    <View>
      <Text>NowShowing</Text>
    </View>
  )
}

export default NowShowing

const styles = StyleSheet.create({})