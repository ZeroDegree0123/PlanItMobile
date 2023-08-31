import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import SignUp from '../components/auth/SignUp'

export default function AuthScreen() {
  return (
    <SafeAreaView className="justify-center items-center">
      <SignUp/>
    </SafeAreaView>
  )
}
