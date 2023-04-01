import { PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { notificationListner, requestUserPermission } from './src/utils/notificationServices'
import Routes from './src/navigation/Routes'
import { foregroundFunc } from './src/utils/notifeeServices'
import notifee from '@notifee/react-native';
const App = () => {
  useEffect(() => {
    console.log(Platform.Version)
    if (Platform.OS == 'android') {
    
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
        .then(res => {
          // console.log('res==========>', res)
          if (!!res && res == 'granted') {
            requestUserPermission();
            notificationListner();
          }
        })
        .catch((err: any) => console.log('something went wrong....'))
    }

    foregroundFunc()
    notifee.onBackgroundEvent(async event => {
      // Handle the background event here
      console.log('Background event:', event.type);
      console.log(event.detail.notification)
    });
  }, [])
  return (
    <>
      <Routes />
    </>
  )
}

export default App

const styles = StyleSheet.create({})
