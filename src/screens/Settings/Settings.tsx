import React from "react";
import { View, Button, Text, StyleSheet, ImageBackground } from "react-native";

interface HomeProps {
  navigation: any;
}

const Settings: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
     source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87Qau4o5dl3jx80zFfx9ozEAAjpb7Q8KvwpSYSSrkHZkg1rlhpr1-QUnhdPfMB11Ia7E&usqp=CAU"}}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to the Settings Screen</Text>
          <Text style={styles.paragraph}>
           Notification implementation tesing
          </Text>
         
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
export default Settings;