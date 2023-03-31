import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title='Settings' onPress={()=>navigation.navigate('Settings')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'coral'
    }
})