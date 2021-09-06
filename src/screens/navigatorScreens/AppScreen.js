import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from './BottomTabNavigator';
import AccountScreen from '../AccountScreen';
import { AntDesign } from '@expo/vector-icons';
import CreateTodoScreen from '../CreateTodoScreen';

import { createStackNavigator } from '@react-navigation/stack';
const AppScreen = ({ navigation }) => {

   const Drawer = createDrawerNavigator();

   return (
      <Drawer.Navigator>
         <Drawer.Screen name="as" component={BottomTabNavigator} />
         <Drawer.Screen name="Account" component={AccountScreen} />
      </Drawer.Navigator>
   )
}

export default AppScreen

const styles = StyleSheet.create({})
