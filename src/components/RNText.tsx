import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

interface IRnText{
  name:string;
}

const RNText = ({name}:IRnText) => {
  return (
    <View>
      <Text>Hi {name}</Text>
    </View>
  )
}

export default RNText

const styles = StyleSheet.create({})