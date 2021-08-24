import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from './BottomTabNavigator';
import AboutScreen from '../AboutScreen';

const AppScreen = () => {

   const Drawer = createDrawerNavigator();

   return (
      <Drawer.Navigator screenOptions={{ headerShown: true }} >
         <Drawer.Screen name="Tab" component={BottomTabNavigator} />
         <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
   )
}

export default AppScreen

const styles = StyleSheet.create({})
