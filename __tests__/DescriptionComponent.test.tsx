import renderer from 'react-test-renderer';
import DescriptionCard from '../src/components/Description';
import {Pressable} from 'react-native';

describe('testing Desciption component', () => {
  test('Component rendered', () => {
    const component = renderer.create(
      <DescriptionCard description={'Nothing'} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('test Description test', () => {
    const mockFunction = jest.fn();
    const component = renderer.create(
      <DescriptionCard description={'Nothing'} onPress={mockFunction} />,
    );
    const button = component.root.findByType(Pressable);
    button.props.onPress();
    expect(mockFunction).toHaveBeenCalled();
  });
});
