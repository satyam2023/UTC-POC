import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const TextInputComponent = () => {
  const [text, setText] = useState('');

  const textChznge=(text:string)=>setText(text);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://example.com/image.png' }} style={styles.image} />
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text:string)=>textChznge(text)}
        placeholder="Enter text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
  },
});

export default TextInputComponent;