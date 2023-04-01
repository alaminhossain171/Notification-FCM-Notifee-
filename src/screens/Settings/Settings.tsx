import React, { useState } from 'react';
import { View, Button, ToastAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const Settings = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);

  const downloadVideo = async (url) => {
    const { dirs } = RNFetchBlob.fs;
    const dirToSave = dirs.DocumentDir;

    const fileName = url.substring(url.lastIndexOf('/') + 1);
    const filePath = `${dirToSave}/${fileName}`;

    const config = {
      fileCache: true,
      useDownloadManager: true,
      notification: true,
      path: filePath,
    };

    const task = RNFetchBlob.config(config).fetch('GET', url);

    task.progress((received, total) => {
      const progress = Math.floor((received / total) * 100);
      setDownloadProgress(progress);
    });

    await task;
    ToastAndroid.show('Video downloaded successfully', ToastAndroid.SHORT);
  };

  const handleDownload = () => {
    const videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    downloadVideo(videoUrl);
  };

  const displayProgressToast = () => {
    ToastAndroid.show(`Downloading video... ${downloadProgress}%`, ToastAndroid.SHORT);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Download Video" onPress={handleDownload} />
      {downloadProgress > 0 && displayProgressToast()}
    </View>
  );
};

export default Settings;