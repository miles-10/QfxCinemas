import React, {useState, createContext, useEffect} from 'react';
import BaseUrl from '@services/api/baseurlApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'react-native-crypto-js';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userToken, setUserToken] = useState('');

  const loginUrl = `${BaseUrl}connect/token`;

  useEffect(() => {
    AsyncStorage.getItem('UserToken')
      .then(token => {
        if (token) {
          let decryption = CryptoJS.AES.decrypt(token, 'secret key 123');
          let originalText = decryption.toString(CryptoJS.enc.Utf8);
          setUserToken(JSON.parse(originalText).tokens);
        }
      })
      .catch(error => console.error('Load Error =>', error));
  }, []);

  useEffect(() => {
    if (userToken) {
      try {
        fetch(`${BaseUrl}api/account/userinfo`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
          .then(res => res.json())
          .then(data => {
            setUserInfo(data);
          })
          .catch(err => {
            console.log('Catch Error =>', err);
          });
      } catch (error) {
        console.log('Fetch error: ', error);
      }
    }
  }, [userToken]);

  const login = async logindata => {
    const {username, password} = logindata;
    const bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);
    bodyFormData.append('grant_type', 'password');
    bodyFormData.append('client_id', 'self');
    try {
      const res = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: bodyFormData,
      });
      const data = await res.json();

      const accessTokenData = data.access_token;
      let encryptedText = CryptoJS.AES.encrypt(
        JSON.stringify({tokens: accessTokenData}),
        'secret key 123',
      ).toString();

      await AsyncStorage.setItem('UserToken', encryptedText);
      setUserToken(accessTokenData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{userInfo, login, setUserToken, setUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
