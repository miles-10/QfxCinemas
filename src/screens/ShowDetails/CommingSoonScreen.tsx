// import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import React, {FC, useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {requestNowShowing} from '@services/redux/movie/NowShowing/showing.action';
// import axios from 'axios';

// const MovieScreen = ({route}: any) => {
//   const [details, setDetails] = useState<any>();
//   const [link, setLink] = useState<any>();

//   // const dispatch = useDispatch();
//   // const Datas = useSelector((state: any) => {
//   //   return state.showing.nowShowing;
//   // });

//   useEffect(() => {
//     // dispatch(requestNowShowing());
//     if (route.params.id) {
//       const response = getdata(route.params.id);
//     }
//   }, [route.params?.id]);

//   const getdata = async (id: any) => {
//     const detail = await axios.get(
//       `https://staging.qfxcinemas.com:2005/api/public/Event?=${id}`,
//     );
//     const detailss = detail.data.data.mediaPlayerTrailerURL;
//     console.log('sss', detailss);
//     setDetails(detail.data.data);
//     setLink(detailss);
//   };

//   console.log('de', link);

//   // function extractVideoID(){
//   //   var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
//   //   var match = link.match(regExp);
//   //   if ( match && match[7].length == 11 ){
//   //       console.log('ss', match[7])
//   //       return match[7];

//   //   }else{
//   //       console.log("Could not extract video ID.");
//   //   }
//   //   console.log(match)
//   // }

  

//   // console.log('math', match[2]);

//   return (
//     <SafeAreaView>
//       <View style={styles.mainContainer}>
//         <View style={styles.imageContainer}>
//           <Text
//             style={
//               styles.titleText
//             }>{`${details?.name}(${details?.eventRating})`}</Text>
//           <Text style={styles.text}>{`Genre: ${details?.genre}`}</Text>
//           <Text
//             style={
//               styles.text
//             }>{`Runtime:${details?.showLengthInMinutes}`}</Text>
//           <Text
//             style={styles.text}>{`Cast:${details?.showLengthInMinutes}`}</Text>
//           <Text style={styles.text}>{`Director: ${details?.director}`}</Text>
//           <Text style={styles.text}>{`SYNOPSIS: ${details?.annotation}`}</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default MovieScreen;

// const styles = StyleSheet.create({
//   mainContainer: {},
//   imageContainer: {},
//   titleText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   text: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
// });
