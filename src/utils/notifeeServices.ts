import notifee, { AndroidBadgeIconType, AndroidImportance, AndroidStyle, EventType, TimestampTrigger, TriggerType } from '@notifee/react-native';
import { AndroidColor } from '@notifee/react-native';
import {Platform} from 'react-native'

//simple message
export async function onDisplayNotification() {
   if(Platform.OS=='ios'){
    await notifee.requestPermission()
   }
    

    const channelId = await notifee.createChannel({
      id: 'vibrate3',
      name: 'simple Channel',
      sound:'tiktok',
      importance:AndroidImportance.HIGH,
      badge:true,
      vibration: true,
      vibrationPattern: [300, 500],
      lights: true,
      lightColor: AndroidColor.RED,
    });

    // Display a notification
    notifee.displayNotification({
      title: '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
      subtitle: '&#129395;',
      body:
        'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
      android: {
        style: { type: AndroidStyle.BIGPICTURE, picture: 'https://i.guim.co.uk/img/media/8a909548160d6e75313421b6a160b3edd026ee78/0_13_4535_2722/master/4535.jpg?width=700&quality=85&auto=format&fit=max&s=08af07a87377b2ddc4e48bd030ad1d03' },
        channelId,
        badgeIconType: AndroidBadgeIconType.SMALL,
        color: '#4caf50',
        actions: [
          {
            title: '<b>Dance</b> &#128111;',
            pressAction: { id: 'dance' },
          },
          {
            title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
            pressAction: { id: 'cry' },
          },
        ],
      },
    });
  }


  // canecl notification 
  export async function cancel(notificationId:any) {
    await notifee.cancelNotification(notificationId);
  }


  // Foreground events devices
  export function foregroudEvents(){
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
    });
  }


  // background events 
  export function backgroundEvents(){
    notifee.onBackgroundEvent(async ({ type, detail }:any) => {
      const { notification, pressAction } = detail;
    
      // Check if the user pressed the "Mark as read" action
      if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
        // Update external API
        // await fetch(`https://my-api.com/chat/${notification.data.chatId}/read`, {
        //   method: 'POST',
        // });

        console.log('user pressed background')
    
        // Remove the notification
        await notifee.cancelNotification(notification.id);
      }
    });
  }


  export async function onCreateTriggerNotification() {

    const channelId = await notifee.createChannel({
      id: 'simple3',
      name: 'simple Channel 3',
      sound:'tiktok',
      importance:AndroidImportance.HIGH
    });


    const date = new Date(Date.now());
    date.setMinutes(date.getMinutes() + 1);
    // date.setHours(11);
    // date.setMinutes(10);

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
        android: {
          channelId
        },
      },
      trigger,
    );
  }