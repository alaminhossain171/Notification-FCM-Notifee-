//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';
import { cancel, foregroudEvents, onCreateTriggerNotification, onDisplayNotification } from '../../utils/notifeeServices';



// create a component
const Home = ({ navigation }: any) => {
React.useEffect(() => {
foregroudEvents()
}, [])




    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title='Go To Setting' onPress={() => navigation.navigate('Settings')} />
            <View style={{ marginVertical: 16 }} />
            <Button title='simple notification' onPress={onDisplayNotification} />
            <View style={{ marginVertical: 16 }} />
            <Button title='cancel notification' onPress={()=>cancel('123')} />
            <View style={{ marginVertical: 16 }} />
            <Button title='tigger  notification 1 min later' onPress={()=>onCreateTriggerNotification()} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral'
    },
});

//make this component available to the app
export default Home;