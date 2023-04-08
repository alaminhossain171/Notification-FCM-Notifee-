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



AppRegistry.registerComponent(appName, () => App);
