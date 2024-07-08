
import renderer from 'react-test-renderer';
import RNText from '../src/components/RNText';
import { Text } from 'react-native';

describe("",()=>{
    test("",()=>{
        const name="Satyam"
        const baseStyle = {
            fontweight:'400',
            fontSize: 20
          };
    const component =renderer.create(<RNText name={name} style={baseStyle}/>);
    const root=component.root;
    const text = root.findByType(Text);
      expect(text.props.children).toBe(name);
      expect(text.props.style).toEqual(baseStyle);
    expect(component.toJSON()).toMatchSnapshot();
    });
})