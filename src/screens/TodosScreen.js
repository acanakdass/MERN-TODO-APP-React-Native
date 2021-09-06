import AsyncStorage from '@react-native-async-storage/async-storage'
import { List, ListItem, Card } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'
import todoApi from '../api/todoApi'

const TodosScreen = ({ navigation }) => {
   const [todosData, setTodosData] = React.useState([]);

   React.useEffect(() => {
      getTodosFromApi();
   }, [todosData])


   const getTodosFromApi = async () => {
      const jwtToken = await AsyncStorage.getItem('token');
      const config = {
         headers: { Authorization: `Bearer ${jwtToken}` }
      };
      const response = await todoApi.get('/todos', config);
      setTodosData(response.data)
   }

   const updateTodo = async (todoToUpdate) => {

      // /todos/update/:id
      const jwtToken = await AsyncStorage.getItem('token');
      const config = {
         headers: { Authorization: `Bearer ${jwtToken}` }
      };
      console.log('trying to update a todo')
      const triggerComplete = !todoToUpdate.isCompleted;
      console.log("trigger:" + triggerComplete);
      const response = await todoApi.put(`/todos/update/${todoToUpdate._id}`, { isCompleted: triggerComplete }, config);
      // await AsyncStorage.setItem('token', response.data.token);
      console.log(response.data);
      // try {


      // } catch (error) {
      //    console.log(error.message);
      // }
   }
   React.useEffect(() => {
      const onFocus = navigation.addListener('focus', () => {

         // console.log('Categories screen focused!')
         getTodosFromApi();
         console.log('on focus')
      })
      return onFocus;
   }, [])

   const renderItem = ({ item, index }) => (
      <TouchableOpacity onLongPress={() => updateTodo(item)} delayLongPress={600}>
         <View
            style={{ backgroundColor: item.isCompleted ? 'green' : 'white', borderWidth: 0.5, margin: 5, padding: 15, borderRadius: 35, borderColor: 'gray' }}
            status='basic'
            onPress={() => navigation.navigate('TodoDetail', item)}
         >
            <Text>{item.name}</Text>
            <Text>{item.isCompleted ? 'Completed' : 'Not Completed'}</Text>
         </View>
      </TouchableOpacity>
   );


   return (
      <View>
         <List
            data={todosData}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
         />

      </View>
   )
}

export default TodosScreen;

const styles = StyleSheet.create({

})
