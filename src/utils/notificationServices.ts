import messaging from '@react-native-firebase/messaging';
import NavigationService from '../navigation/NavigationService';

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