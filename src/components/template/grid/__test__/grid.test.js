import React from 'react';
import { Grid } from '../grid';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<Grid />);
});

test('change input value', () => {
  expect(screen.getByText('Input value')).toBeInTheDocument();
  expect(screen.getByTestId('input')).toBeInTheDocument();
  let input = screen.getByTestId('input');
  userEvent.type(input, '32');
  expect(input.value).toBe('32');
});

test('Validate inputs ', () => {
  let error = screen.queryByText(/Input only accepts numbers/);
  expect(error).not.toBeInTheDocument();
  let input = screen.getByTestId('input');
  userEvent.type(input, 'qwert');
  let button = screen.getByTestId('add-btn');
  userEvent.click(button);
  let errorMsg = screen.queryByText(/Input only accepts numbers/);
  expect(errorMsg).toBeInTheDocument();
});

test('Error message not triggered  ', () => {
  let error = screen.queryByText(/Input only accepts numbers/);
  expect(error).not.toBeInTheDocument();
  let input = screen.getByTestId('input');
  userEvent.type(input, '9');
  let button = screen.getByTestId('add-btn');
  userEvent.click(button);
  let errorMsg = screen.queryByText(/Input only accepts numbers/);
  expect(errorMsg).not.toBeInTheDocument();
});

test('Displaying array  ', () => {
  let input = screen.getByTestId('input');
  userEvent.type(input, '9');
  let button = screen.getByTestId('add-btn');
  userEvent.click(button);
  let array = screen.getByText('9');
  console.log(array);
  expect(array).toBeInTheDocument();
  userEvent.type(input, '12');
  userEvent.click(button);
  let arrayElem = screen.getByText('9');
  expect(arrayElem).toBeInTheDocument();
});
