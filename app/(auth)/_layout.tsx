
import Custom_Button from '@/component/Custom_Button';
import Custom_Inputs from '@/component/Custom_Input';
import { images } from '@/constants';
import { Slot } from 'expo-router';
import React from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
const _layout = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
      <ScrollView className='bg-white h-full ' keyboardShouldPersistTaps='handled'>
        <View className="w-full relative" style={{ height: Dimensions.get('screen').height / 2.25 }}>
          <ImageBackground source={images.loginGraphic} className='size-full  ' resizeMode='stretch' />
        </View>
       
      </ScrollView>
       <Custom_Inputs
        placeholder="enter your email"
        value={''}
        onChangeText={(text)=>{}}
        label='Email'
        keyboardType='email-address'
        />
        <Custom_Button />
      <Slot />
    </KeyboardAvoidingView>


  )
}

export default _layout