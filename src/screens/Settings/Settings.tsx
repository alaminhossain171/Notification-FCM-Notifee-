import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = ({route}:any) => {
    console.log("my routes",route.params)
  return (
    <View style={{backgroundColor:}}>
      <Text>{route.params.name}</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})