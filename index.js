/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';
//============== Register background handler Background & Quit state messages===============
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background! Background & Quit state messages', remoteMessage);
  });
// Set up a background event handler for handling notifications
notifee.onBackgroundEvent(async ({ type, detail }) => {
  if (type === Notifee.BackgroundEventType.NOTIFICATION_RESPONSE) {
    // Handle notification response
    console.log('Notification response:', detail.notification);
  } else {
    // Handle other types of background events
    console.log('Background event:', type);
  }
});
AppRegistry.registerComponent(appName, () => App);
