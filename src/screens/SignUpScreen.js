import React from 'react'
import { StyleSheet, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import AuthForm from '../components/AuthForm'


const SignUpScreen = () => {


   return (
      <SafeAreaView>
         <AuthForm formType='Sign Up' />
      </SafeAreaView>
   )
}

export default SignUpScreen

const styles = StyleSheet.create({
})
