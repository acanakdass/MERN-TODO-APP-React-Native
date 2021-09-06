import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TodoDetail = (props) => {
   const [todoData, setTodoData] = React.useState(props.route.params)
   React.useEffect(() => {
      console.log(props.route.params)
   }, [])
   return (
      <View>
         <Text>Detail </Text>
         <Text>{todoData._id}</Text>
         <Text>{todoData.name}</Text>
         <Text>{todoData.desc}</Text>
         <Text>{todoData.isCompleted ? "True" : "Flse"}</Text>
      </View>
   )
}

export default TodoDetail

const styles = StyleSheet.create({})
