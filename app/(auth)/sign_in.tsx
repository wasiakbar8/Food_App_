import { router } from 'expo-router'
import React from 'react'
import { Button, View } from 'react-native'

const sign_in = () => {
  return (
    <View>
      
      <Button title='Sign In' onPress={()=>router.push('./sign_up')}/> 
    </View>
  )
}

export default sign_in