// @ts-nocheck
import { PermissionsAndroid, Platform } from 'react-native';
import React, { useEffect } from 'react';
import { notificationListner, requestUserPermission } from './src/utils/notificationServices';
import Routes from './src/navigation/Routes';


const App = () => {

  useEffect(() => {
    if (Platform.OS == 'android') {
      // for api level 33 taking permission
      if (Platform.Version >= 33) {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).then(res => {
          console.log('res======>', res)
          if (!!res && res == 'granted') {
            requestUserPermission()
            notificationListner()
          }
        }).catch(err => {
          console.log('permission ===> err==> ', err)
          alert('somethinsg wrong');
        })
      }
      else {
        requestUserPermission()
        notificationListner()
      }

    }

    else {
      console.log('other os like ios/android tv');
    }


  }, [])

  return (
    <>
      <Routes />
    </>
  )
}

export default App

