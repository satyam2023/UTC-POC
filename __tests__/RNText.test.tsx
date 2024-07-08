
import renderer from 'react-test-renderer';
import RNText from '../src/components/RNText';

describe("",()=>{
    test("",()=>{
    const component =renderer.create(<RNText name={'Satyam'}/>);
    expect(component.toJSON()).toMatchSnapshot();
    });
})