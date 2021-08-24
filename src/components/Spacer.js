import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Spacer = ({ horizontal = 0, vertical = 0 }) => {
   return (
      <View style={{ marginVertical: vertical, marginHorizontal: horizontal }}>
      </View>
   )
}

export default Spacer

const styles = StyleSheet.create({})
