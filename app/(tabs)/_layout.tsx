import { Redirect, Slot } from 'expo-router'
import React from 'react'
export default function _layout() {
  const isauthenticated =false
  if(!isauthenticated) return <Redirect href="/sign_in"/>
  return <Slot/>
}