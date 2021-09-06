import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../AccountScreen';

const AccountStackScreen = createStackNavigator();

const AccountStack = () => {
   return (
      <AccountStackScreen.Navigator>
         <AccountStackScreen.Screen
            name="Account"
            component={AccountScreen}
            options={{ title: 'Account' }}
         />
      </AccountStackScreen.Navigator>
   )
}

export default AccountStack

const styles = StyleSheet.create({})
