import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const InputText = ({ value, onChangeText, placeholder }:any) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
});

export default InputText;