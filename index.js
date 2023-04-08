/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { backgroundEvents } from './src/utils/notifeeServices';

//========= Background & Quit state messages==============
// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

//========notifee backgroundevents =======
backgroundEvents();


// server key 
// AAAA7c6OzpM:APA91bHJtN6y71J9Jc1jWFVHq2os8uPB0Hh-2bd6UT9_Q0HKNKqjfYSz-qmK-rGUmIxrdGkQh-VgfBDoX9ms3wikAyDOsw0FmT9AXsdabNIzjZrVEMCqdclOJ5guZsbzt6ufC0EGuFRE
AppRegistry.registerComponent(appName, () => App);
