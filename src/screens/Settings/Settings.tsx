import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = ({route}:any) => {
  console.log('route is ===>',route.params)
  return (
    <View>
      <Text>Settings {}</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})