import { List, ListItem, Card } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-paper'

const TodosScreen = () => {
   const data = [
      {
         title: 'Go to school',
         description: 'Going to the school descriiption'
      },
      {
         title: 'Go to school 2',
         description: 'Going to the scasdahool descsasddariiption'
      },
      {
         title: 'Go to school 3',
         description: 'Going to the schosaasdasdol descriiption'
      },
   ]

   const renderItem = (data) => (
      <Card
         style={styles.item}
         status='basic'
      >
         <Text>teststest</Text>
      </Card>
   );


   return (
      <View >

         <List
            data={data}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
         />

      </View>
   )
}

export default TodosScreen;

const styles = StyleSheet.create({})
