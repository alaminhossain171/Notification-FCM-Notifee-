import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const Menu = () => {
  const [progress, setProgress] = useState(0);

  const requestStoragePermission = async () => {
    try {
      if (Platform.Version < 33) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage permission needed',
            message:
              'Storage App needs access to your Storage ' +
              'so you can take Download pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the storage');
          downloadFile('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
        } else {
          console.log('Storage permission denied');
          ToastAndroid.show('Storage permission denied', ToastAndroid.SHORT);
        }
      } else {
        console.log('You are using Android API level 33 or higher, storage permission is not required');
        downloadFile('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
      }
    } catch (err) {
      console.warn(err);
      ToastAndroid.show('Error requesting storage permission', ToastAndroid.SHORT);
    }
  };

  const downloadFile = async(url: string) => {
    const { fs } = RNFetchBlob;
    const date = new Date();
    const fileDir = fs.dirs.DownloadDir;
    const fileName = `download_${Math.floor(date.getDate() + date.getSeconds() / 2)}.mp4`;
    const filePath = `${fileDir}/${fileName}`;
  
    RNFetchBlob
      .config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          title: fileName,
          description: 'File download',
          mediaScannable: true,
          path: filePath,
        },
      })
      .fetch('GET', url, {
        
      })
      .progress({ count: 10 }, (received, total) => {
        const newProgress = (received / total) * 100;
      
        setProgress(() => newProgress);
      })
     
      .then((res) => {
        console.log('The file saved to ', res.path());
        ToastAndroid.show('Download success!', ToastAndroid.SHORT);
      })
      .catch((err) => {
        console.log(err);
        ToastAndroid.show('Download failed!', ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Button title="Download" onPress={() => requestStoragePermission()} />
      <Text>{`Progress: ${progress.toFixed(2)}%`}</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progress: {
    fontSize: 18,
    marginTop: 10,
  },
});