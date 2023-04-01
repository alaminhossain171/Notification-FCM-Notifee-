import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import notifee, { AndroidImportance } from '@notifee/react-native';
const Home = ({navigation}:any) => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default2',
      name: 'Default Channel2',
      sound:"default",
      importance:AndroidImportance.HIGH
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'ic_launcher', 
    
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title='Settings' onPress={()=>navigation.navigate('Settings')} />

      <Button title="Display Notification" onPress={() => onDisplayNotification()} />
      
      <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'coral'
    }
})