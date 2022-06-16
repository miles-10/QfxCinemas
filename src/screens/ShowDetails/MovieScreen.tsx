import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {requestNowShowing} from '@services/redux/movie/NowShowing/showing.action';

interface item {
  renderItem: any;
}

const MovieScreen = ({route}: any) => {
  const [details, setDetails] = useState<any>();

  const dispatch = useDispatch();
  const Datas = useSelector((state: any) => {
    return state.showing.nowShowing;
  })

  useEffect(() => {
    dispatch(requestNowShowing());
    if(route.params.id) {
      const response = getdata(route.params.id)
    }
  }, [route.params.id])

  const getdata  = (id: any ) => {

    setDetails(`${Datas}/${id}`)
  }
  return (
    <View>
      <Text>MovieDetails</Text>
    </View>
  )
}

export default MovieScreen

const styles = StyleSheet.create({})