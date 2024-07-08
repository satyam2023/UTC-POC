import React from 'react';
import renderer, { act, create } from 'react-test-renderer';
import TextInputComponent from '../src/components/InputText';

test('it should update text input value on change', () => {
    const onChange=jest.fn((text:string)=>text)
  const component= renderer.create(<TextInputComponent />);  
 expect(component.toTree()).toMatchSnapshot();

});
