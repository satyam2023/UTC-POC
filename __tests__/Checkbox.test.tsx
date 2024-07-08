import {fireEvent, render} from '@testing-library/react-native';
import CustomCheckBox from '../src/components/CheckBox';

describe('Testing the CheckBox', () => {
  const baseStyle = {
    flex: 1,
  };


  test('Making Snapshot', () => {
    const root = render(<CustomCheckBox />);
    expect(root.toJSON()).toMatchSnapshot();
  });

  test('taking first conditional componet', () => {
    const {getByTestId} = render(<CustomCheckBox style={baseStyle} isRectangular={false} />);
    const component = getByTestId('conditional-rendering');
    expect(component.props.style).toEqual(baseStyle);
  });


  test('taking  conditional componet', () => {
    const mckFunc=jest.fn();
  
    const {getByTestId}= render(<CustomCheckBox  isRectangular={true}  onPress={mckFunc} />);
    const component = getByTestId("conditional");
    fireEvent.press(component);
    expect(mckFunc).toHaveBeenCalled();
  });
  
});
