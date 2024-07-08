import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react';

interface IRnText{
  name:string;
  style:TextStyle;
}

const RNText = ({name,style}:IRnText) => {
  return (

      <Text style={style}>{name}</Text>

  )
}

export default RNText

const styles = StyleSheet.create({})