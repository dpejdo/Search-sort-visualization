import React from 'react';
import { Input } from '../input';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let getByTestId;
beforeEach(() => {
  const getValue = jest.fn();
  const component = render(<Input getValue={getValue} value={'test'} />);
  getByTestId = component.getByTestId;
});
afterEach(cleanup);
test('change input value ', () => {
  const input = getByTestId('input');
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});
test('change input value ', () => {
  const input = getByTestId('input');
  fireEvent.change(input, { target: { value: 'qweqtest' } });
  expect(input.value).toBe('test');
});
