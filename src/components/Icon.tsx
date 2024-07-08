import React from 'react';
import { StyleSheet, Text } from 'react-native';



export const Icon = () => (
  <Text style={[ styles.icon ]}>
  Hello
  </Text>
);

const styles = StyleSheet.create({
  icon: {
    fontWeight:'500',
    fontSize: 20,
  },
});