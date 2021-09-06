import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from '@ui-kitten/components';
import AccountScreen from '../AccountScreen';


import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeStackScreen from './HomeStackScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AccountStack from '../StackScreens/AccountStack';

const BottomTab = createBottomTabNavigator();

const PersonIcon = (props) => (
   <AntDesign name="user" size={24} color="black" />
);
const TodoListIcon = (props) => (
   <FontAwesome name="list-alt" size={24} color="black" />
);

const BottomTabBar = ({ navigation, state }) => (
   <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
      style={{ paddingBottom: 15, paddingTop: 10 }}
   >
      <BottomNavigationTab title="Todo's" icon={TodoListIcon} />
      <BottomNavigationTab title='Account' icon={PersonIcon} />
   </BottomNavigation>
);



const BottomTabNavigator = () => (
   <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <BottomTab.Screen name='Todos' component={HomeStackScreen} />
      {/* <BottomTab.Screen name='Account' component={AccountScreen} /> */}
      <BottomTab.Screen name='Account' component={AccountStack} />

   </BottomTab.Navigator>
)

export default BottomTabNavigator

const styles = StyleSheet.create({})
