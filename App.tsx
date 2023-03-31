import { PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { notificationListner, requestUserPermission } from './src/utils/notificationServices'
import Routes from './src/navigation/Routes'

const App = () => {
  useEffect(() => {
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
  }, [])
  return (
    <>
      <Routes />
    </>
  )
}

export default App

const styles = StyleSheet.create({})
