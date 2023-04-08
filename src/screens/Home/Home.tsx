import React from "react";
import { View, Button, Text, StyleSheet, ImageBackground } from "react-native";
import notifee, { AndroidImportance } from '@notifee/react-native';
interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {

  async function displayNotifiation() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'simple',
      name: 'Default Channel',
      sound: 'default',
      importance: AndroidImportance.HIGH
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg" }}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to the Home Screen</Text>
          <Text style={styles.paragraph}>
            Notification implementation tesing
          </Text>
          <Button
            title="Go to Menu Screen"
            onPress={() => navigation.navigate("Menu")}
            style={styles.button}
          />
          <View style={{ margin: 10 }} />
          <Button
            title="Go to Settings Screen"
            onPress={() => navigation.navigate("Settings")}
            style={styles.button}
          />
          <View style={{ margin: 10 }} />
          <Button
            title="Show notification"
            onPress={() => displayNotifiation()}
            style={styles.button}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 32,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff4d4d",
  },
});

//make this component available to the app
export default Home;