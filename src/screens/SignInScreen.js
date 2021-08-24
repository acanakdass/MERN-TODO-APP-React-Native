import React from 'react'
import { StyleSheet, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import AuthForm from '../components/AuthForm'


const SignInScreen = () => {


   return (
      <SafeAreaView>
         <AuthForm formType='Sign In' />
      </SafeAreaView>
   )
}

export default SignInScreen

const styles = StyleSheet.create({
})
