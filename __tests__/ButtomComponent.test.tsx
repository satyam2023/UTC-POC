import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from '../src/components/Button';
import { Image, Pressable, ViewStyle } from 'react-native';


describe('CustomButton Component', () => {
    test('component rendered', () => {
      const component = renderer.create(
        <CustomButton text="Click Me" />
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  
    test('isDisabled Props', () => {
      const component = renderer.create(
        <CustomButton text="Click Me" isDisabled={true} />
      );
      const button = component.root.findByType(Pressable);
      expect(button.props.disabled).toBe(true);
      expect(component.toJSON()).toMatchSnapshot();
    });
  
    test('button style', () => {
      const customStyle ={backgroundColor:'red'}
      const contStyle={height:10}
      const component = renderer.create(
        <CustomButton text="Click Me" buttonStyle={customStyle} />
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  
  
    test('image', () => {
      const imageSource = { uri: 'https://example.com/icon.png' };
      const component = renderer.create(
        <CustomButton text="Click Me" image={imageSource} />
      );
      const image = component.root.findByType(Image);
      expect(image.props.source).toEqual(imageSource);
    expect(component.toJSON()).toMatchSnapshot();
    });
  
    test('calls onPress ', () => {
      const onPressMock = jest.fn();
      const component = renderer.create(
        <CustomButton text="Click Me" onPress={onPressMock} />
      );
      const button = component.root.findByType(Pressable);
      button.props.onPress();
      expect(onPressMock).toHaveBeenCalled();
    });
  
    test('Image Style', () => {
      const customImageStyle = { width: 30, height: 30 };
      const imageSource = { uri: 'https://example.com/icon.png' };
      const component = renderer.create(
        <CustomButton text="Click Me" image={imageSource} imageStyle={customImageStyle} />
      );
      const image = component.root.findByType(Image);
      expect(image.props.style).toContainEqual(customImageStyle);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
