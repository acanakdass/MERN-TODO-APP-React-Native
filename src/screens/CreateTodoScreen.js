import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Datepicker, Icon } from '@ui-kitten/components'
import Spacer from '../components/Spacer'
import { Button } from 'react-native-elements'
import { AuthContext } from '../context/AuthContext'
import todoApi from '../api/todoApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { navigationRef } from '../RootNavigation'

const CreateTodoScreen = ({ navigation }) => {
   const [name, setName] = React.useState('');
   const [desc, setDesc] = React.useState('');
   const [isCompleted, setIsCompleted] = React.useState(false);
   const [date, setDate] = React.useState(new Date());
   const [isButtonLoading, setIsButtonLoading] = React.useState(false);


   const { goWithoutSignIn, signIn, signUp } = React.useContext(AuthContext)
   const LoadingIndicator = (props) => (
      <View >
         <Spinner size='small' />
      </View>
   );

   const createTodo = async () => {
      const jwtToken = await AsyncStorage.getItem('token');
      console.log(jwtToken);
      setIsButtonLoading(true);
      console.log(date)
      const config = {
         headers: { Authorization: `Bearer ${jwtToken}` }
      };
      try {
         console.log('trying to post a todo')
         const response = await todoApi.post('/todos', { name, desc, isCompleted, date }, config);
         // await AsyncStorage.setItem('token', response.data.token);
         console.log(date)
         console.log(response.data);
         setIsButtonLoading(false);
         navigation.goBack();

      } catch (error) {
         console.log(error.message);
         setIsButtonLoading(false);
      }
      console.log('admin login')
      setIsButtonLoading(false);
   }


   //const { name, desc, isCompleted, date } = req.body;
   return (
      <View style={styles.container}>
         <Input
            placeholder="Enter name for todo"
            value={name}
            onChangeText={inputValue => setName(inputValue)}
         />
         <Spacer vertical={5} />
         <Input
            placeholder="Description"
            value={desc}
            onChangeText={inputValue => setDesc(inputValue)}
         />
         <Spacer vertical={5} />


         {/* <Input
            placeholder="Is Completed"
            value={name}
            onChangeText={inputValue => setName(inputValue)}
         /> */}
         <Datepicker
            // label='Date'
            date={date}
            onSelect={nextDate => setDate(nextDate)}
         // accessoryRight={CalendarIcon}
         />
         <Spacer vertical={5} />

         <Button
            title="Create"
            loading={isButtonLoading}
            onPress={() => createTodo()}
         />
      </View>
   )

}

export default CreateTodoScreen

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 20,
      paddingVertical: 50
   }
})
