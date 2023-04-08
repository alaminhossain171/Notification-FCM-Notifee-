import React from "react";
import { View, Button, Text, StyleSheet, ImageBackground } from "react-native";

interface HomeProps {
  navigation: any;
}

const Menu: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
     source={{uri: "https://images.unsplash.com/photo-1536928994169-e339332d0b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8ODg4Mzk2Nnx8ZW58MHx8fHw%3D&w=1000&q=80"}}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to the Menu Screen</Text>
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
export default Menu;