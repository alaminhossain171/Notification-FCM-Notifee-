import messaging from '@react-native-firebase/messaging';
import NavigationService from '../navigation/NavigationService';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { Platform } from 'react-native';
export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
}


async function onDisplayNotification(data) {
    // Request permissions (required for iOS)

    if (Platform.OS == 'ios') {
        await notifee.requestPermission()
    }

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
        id: data?.data?.channel_id,
        name: data?.data?.channel_name,
        sound: data?.data?.sound_name,
        importance: AndroidImportance.HIGH,
    });

    // Display a notification
    await notifee.displayNotification({
        title: data?.notification.title,
        body: data?.notification.body,
        android: {
            channelId,

        },
    });
    
}



async function getFcmToken() {
    try {
        const token = await messaging().getToken();
        console.log('fcm token ', token)
    } catch (error) {
        console.log('error generating token')
    }
}

export async function notificationListner() {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log('A new FCM message arrived!', remoteMessage); 
        onDisplayNotification(remoteMessage)
    });


    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        // setTimeout(() => {
        //     NavigationService.navigate('Settings')
        // }, 1200)
        if (!!remoteMessage?.data && remoteMessage?.data?.redirect_to == "Menu") {
            setTimeout(() => {
                NavigationService.navigate("Menu", { data: remoteMessage?.data })
            }, 1200)
        }
        if (!!remoteMessage?.data && remoteMessage?.data?.redirect_to == "Settings") {
            setTimeout(() => {
                NavigationService.navigate("Settings", { data: remoteMessage?.data })
            }, 1200);
        }
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );

            }

        });
}