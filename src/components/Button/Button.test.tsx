import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonStart } from './Button';

describe('ButtonStart', () => {
  test('renders the button with the correct title', () => {
    const { getByText } = render(<ButtonStart titleButton="Start" onPress={() => {}}  testID="test" />);
    const buttonElement = getByText('Start');
    expect(buttonElement).toBeDefined();
  });

  test('fires the onPress event when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<ButtonStart titleButton="Start" onPress={onPressMock} testID="test" />);
    const buttonElement = getByText('Start');
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
