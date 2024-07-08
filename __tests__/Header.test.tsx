
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import Header from '../src/components/AppHeader';

describe('Header Component', () => {

  test("Component",()=>{
    const root=render(<Header topheading="Test Heading" />);
    expect(root.toJSON()).toMatchSnapshot();
  })

  it('renders correctly', () => {
    const { getByText, queryByText ,} = render(<Header topheading="Test Heading" />);
    expect(getByText('Test Heading')).toHaveLength;
  });
 

  it('renders logout button when isLogoutButton is true', () => {
    const { getByText } = render(<Header topheading="Test Heading" isLogoutButton={true} />);
    expect(getByText('LogOUt')).toBeTruthy();
  });

  it('calls rightButtonPress when the logout button is pressed', () => {
    const mockRightButtonPress = jest.fn();
    const { getByText } = render(
      <Header topheading="Test Heading" isLogoutButton={true} rightButtonPress={mockRightButtonPress} />
    );

    fireEvent.press(getByText('LogOUt'));
    expect(mockRightButtonPress).toHaveBeenCalled();
  });
});
