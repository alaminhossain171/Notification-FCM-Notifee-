import notifee, { EventType } from '@notifee/react-native';


export function foregroundFunc(){
    return notifee.onForegroundEvent(({ type, detail }) => {
        switch (type) {
          case EventType.DISMISSED:
            console.log('User dismissed notification=======>', detail.notification);
            break;
          case EventType.PRESS:
            console.log('User pressed notification=====>', detail.notification);
            break;
        }
      });
}