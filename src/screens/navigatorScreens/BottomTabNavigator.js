import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from '../SignUpScreen';
import SignInScreen from '../SignInScreen';
import HomeScreen from '../HomeScreen';
import AboutScreen from '../AboutScreen';


import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TodosScreen from '../HomeScreen';

const RootStack = createStackNavigator();
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
      style={{ paddingBottom: 30, paddingTop: 10 }}
   >
      <BottomNavigationTab title="Todo's" icon={TodoListIcon} />
      <BottomNavigationTab title='About' icon={PersonIcon} />
   </BottomNavigation>
);


const BottomTabNavigator = () => (
   <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <BottomTab.Screen name='Todos' component={TodosScreen} />
      <BottomTab.Screen name='About' component={AboutScreen} />
   </BottomTab.Navigator>
)

export default BottomTabNavigator

const styles = StyleSheet.create({})
