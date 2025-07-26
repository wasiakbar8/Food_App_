import { router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const sign_in = () => {
  return (
    <View>
      <Text>sign_in</Text>
      <Button title='Sign In' onPress={()=>router.navigate('./sign_up')}/> 
    </View>
  )
}

export default sign_in