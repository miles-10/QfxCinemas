import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Surface} from 'react-native-paper';
import Colors from '@assets/colors/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';

const ScreenHeader = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Surface style={styles.header}>
        <View style={styles.view}>
          {
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color={Colors.iconColor} />
            </TouchableOpacity>
          }
          <View style={styles.viewTitle}>
            <Text style={styles.text}>
              {route.name === 'Login'
                ? 'Login'
                : route.name === 'MyProfile'
                ? 'My Profile'
                : route.name === 'Support'
                ? 'Support'
                : route.name === 'Selection'
                ? 'Show Selection'
                : route.params?.title}
            </Text>
          </View>
        </View>
      </Surface>
    </SafeAreaView>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary,
    width: '100%',
  },
  view: {
    marginLeft: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  text: {
    fontWeight: '500',
    justifyContent: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
