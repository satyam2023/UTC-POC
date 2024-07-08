// InputText.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputText from '../src/components/InputText';


test('it renders correctly and handles text input', () => {
  const handleChangeText = jest.fn();
  const placeholderText = "Enter text";

  const { getByPlaceholderText } = render(
    <InputText
      value="hello"
      onChangeText={handleChangeText}
      placeholder={placeholderText}
    />
  );

  const input = getByPlaceholderText(placeholderText);
  expect(input).toBeTruthy();
  fireEvent.changeText(input, 'test input');
  expect(handleChangeText).toHaveBeenCalledWith('test input');
});

