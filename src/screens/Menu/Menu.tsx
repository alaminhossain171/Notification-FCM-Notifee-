import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Menu = ({route}:any) => {
    console.log("my routes",route.params)
  return (
    <View>
      <Text>Menu</Text>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})