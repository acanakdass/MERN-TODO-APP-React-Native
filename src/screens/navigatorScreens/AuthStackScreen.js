import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';

const AuthStackScreen = (props) => {

   const AuthStack = createStackNavigator();

   return (
      <AuthStack.Navigator headerMode="none">
         <AuthStack.Screen name="SignIn" component={SignInScreen} options={{ animationEnabled: false }} />
         <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ animationEnabled: false }} />
      </AuthStack.Navigator>
   )
}

export default AuthStackScreen

const styles = StyleSheet.create({})
