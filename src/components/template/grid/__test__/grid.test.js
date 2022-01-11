import React from 'react';
import { Grid } from '../grid';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<Grid />);
});

test('change input value', () => {
  expect(
    screen.getByRole('textbox', {
      name: /input elements/i,
    })
  ).toBeInTheDocument();
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  expect(input).toBeInTheDocument();
  userEvent.type(input, '32');
  expect(input.value).toBe('32');
});

test('Validate inputs ', () => {
  let error = screen.queryByText(/Input only accepts numbers/);
  expect(error).not.toBeInTheDocument();
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  userEvent.type(input, 'qwert');
  let button = screen.getByTestId('add-btn');
  userEvent.click(button);
  let errorMsg = screen.queryByText(/Input only accepts numbers/);
  expect(errorMsg).toBeInTheDocument();
});

test('Error message not triggered  ', () => {
  let error = screen.queryByText(/Input only accepts numbers/);
  expect(error).not.toBeInTheDocument();
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  userEvent.type(input, '9');
  let button = screen.getByTestId('add-btn');
  userEvent.click(button);
  let errorMsg = screen.queryByText(/Input only accepts numbers/);
  expect(errorMsg).not.toBeInTheDocument();
});

test('Displaying array  ', () => {
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  userEvent.type(input, '9');
  let button = screen.getByTestId('add-btn');
  userEvent.click(button);
  let array = screen.getByText('9');
  expect(array).toBeInTheDocument();
  userEvent.type(input, '12');
  userEvent.click(button);
  let arrayElem = screen.getByText('9');
  expect(arrayElem).toBeInTheDocument();
});

test('Display error message when trying to search for value with empty input', () => {
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  expect(input.value).toBe('');
  let searchButton = screen.getByRole('button', {
    name: /search/i,
  });
  userEvent.click(searchButton);
  let errorMsg = screen.getByText(/please enter the value/i);
  expect(errorMsg).toBeInTheDocument();
});
