import {Alert, Linking, Platform} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import baseUrl from '@services/api/baseurlApi';

import axios from 'axios';
import Pkg from '../../../package.json';

const appVersion = Pkg.version;

const platform = Platform.OS;

const checkAppVersion = async () => {
  const apiAppVersionUrl = `${baseUrl}api/public/AppVersion?platform=${platform}`;
  const details = await axios.get(apiAppVersionUrl);
  const apiAppVersion = details.data.data.version;

  if (platform === 'android') {
    DeviceInfo.isEmulator().then(isEmulator => {
      if (isEmulator) {
        if (apiAppVersion !== appVersion) {
          Alert.alert(
            'Update Available',
            `Your app Version is ${appVersion}. Please update your App`,
            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'https://play.google.com/store/search?q=qfx&c=apps&hl=en&gl=US',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
      if (!isEmulator) {
        if (apiAppVersion !== appVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${appVersion}. Please update your App`,
            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'market://details?id=com.exolutus.qfxcinemas',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
    });
  } else {
    DeviceInfo.isEmulator().then(isEmulator => {
      /* Checking if the app is running on emulator or not. */
      if (isEmulator) {
        if (apiAppVersion !== appVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${appVersion}.  Please update your App`,
            [
              {
                text: 'Cancel',
                // onPress: () => RNExitApp.exitApp(), // exit app
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'https://apps.apple.com/np/app/qfx-cinema/id1092931043',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
      if (!isEmulator) {
        if (apiAppVersion !== appVersion) {
          Alert.alert(
            'Update Available',
            `Your app version is ${appVersion}.  Please update your App`,
            [
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
              {
                text: 'Update',
                onPress: () =>
                  Linking.openURL(
                    'https://apps.apple.com/np/app/qfx-cinema/id1092931043',
                  ),
              },
            ],
            {cancelable: false},
          );
        }
      }
    });
  }
};

export default checkAppVersion;
