import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from '@ui-kitten/components'
import Spacer from '../components/Spacer'

import { AuthContext } from '../context/AuthContext'

const AccountScreen = () => {

   const { goWithoutSignIn, signOut } = React.useContext(AuthContext)

   return (
      <View style={{ padding: 30 }}>
         <Text category='h4' style={{ textAlign: 'center' }} >Account</Text>
         <Spacer vertical={20} />
         <Button appearance='outline' onPress={() => signOut()} >Sign Out</Button>
      </View>
   )
}

export default AccountScreen

const styles = StyleSheet.create({})
