import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CreateTodoScreen from '../CreateTodoScreen'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import TodosScreen from '../TodosScreen'
import TodoDetail from '../TodoDetail';
const HomeStackScreen = (props) => {

   const Stack = createStackNavigator();

   return (
      <Stack.Navigator>
         <Stack.Screen options={{
            headerRight: () => (
               <TouchableOpacity>
                  <AntDesign
                     style={{ marginRight: 5 }}
                     name="plus"
                     size={24}
                     color="black"
                     onPress={() => props.navigation.push('CreateTodo')}
                  />
               </TouchableOpacity>
            ),
            headerLeft: () => (
               <TouchableOpacity>
                  <AntDesign onPress={() => props.navigation.toggleDrawer()} style={{ marginLeft: 5 }} name="menu-fold" size={24} color="black" />
               </TouchableOpacity>
            )
         }} name="Todos" component={TodosScreen} />
         <Stack.Screen name="CreateTodo" component={CreateTodoScreen} />
         <Stack.Screen name="TodoDetail" component={TodoDetail} />
      </Stack.Navigator>
   )
}

export default HomeStackScreen

const styles = StyleSheet.create({})
