import { router } from 'expo-router'
import React from 'react'
import { Button, View } from 'react-native'

const sign_up = () => {
  return (
    <View>
    
       <Button title='Sign Up' onPress={()=>router.push('./sign_in')}/> 
    </View>
  )
}

export default sign_up