import React from 'react';
import { Input } from '../input';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  const getValue = jest.fn();
  render(<Input getValue={getValue} value={'test'} />);
});
afterEach(cleanup);
test('change input value ', () => {
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});
test('change input value ', () => {
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  fireEvent.change(input, { target: { value: 'qweqtest' } });
  expect(input.value).toBe('test');
});
