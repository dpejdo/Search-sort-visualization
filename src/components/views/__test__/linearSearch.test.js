import React from 'react';
import LinearSearchPage from '../linearSearch';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { timer } from '../../../utilites/timer';
beforeEach(() => {
  render(<LinearSearchPage />);
});
test('linearSearch Tests', async () => {
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  userEvent.type(input, '9');
  let button = screen.getByTestId('add-btn');
  userEvent.click(button);
  userEvent.type(input, '2');
  userEvent.click(button);
  userEvent.type(input, '5');
  userEvent.click(button);
  userEvent.type(input, '4');
  userEvent.click(button);
  userEvent.type(input, '3');
  userEvent.click(button);
  userEvent.type(
    screen.getByRole('textbox', {
      name: /search for element/i,
    }),
    '3'
  );
  let buttonSearch = screen.getByRole('button', {
    name: /search/i,
  });
  userEvent.click(buttonSearch);
  async function wait() {
    await timer(5000);
  }
  await wait();
  let value = await screen.getByTestId(3).classList;
  expect(value).toContain('found');
}, 10000);

test('linearSearch test check if element is not found and pass the error message', async () => {
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  userEvent.type(input, '9');
  let button = screen.getByTestId('add-btn');
  userEvent.click(button);
  userEvent.type(input, '2');
  userEvent.click(button);
  userEvent.type(input, '5');
  userEvent.click(button);
  userEvent.type(input, '4');
  userEvent.click(button);
  userEvent.type(input, '3');
  userEvent.click(button);
  userEvent.type(
    screen.getByRole('textbox', {
      name: /search for element/i,
    }),
    '12'
  );
  let buttonSearch = screen.getByRole('button', {
    name: /search/i,
  });
  userEvent.click(buttonSearch);
  async function wait() {
    await timer(5000);
  }
  await wait();

  expect(screen.getByText(/element is not found/i)).toBeInTheDocument();
}, 10000);

test('Reset all css for array that has been searched', async () => {
  let input = screen.getByRole('textbox', {
    name: /input elements/i,
  });
  userEvent.type(input, '9');
  let button = screen.getByTestId('add-btn');
  userEvent.click(button);
  expect(screen.getByText('9')).toBeInTheDocument();
  userEvent.type(input, '12');
  userEvent.click(button);

  let search = screen.getByRole('textbox', {
    name: /search for element/i,
  });
  userEvent.type(search, '12');
  userEvent.click(
    screen.getByRole('button', {
      name: /search/i,
    })
  );
  async function wait() {
    await timer(5000);
  }
  await wait();
  expect(screen.getByText(/12/i).classList).toContain('found');
  let elements = screen.getByTestId('array');
  let all = elements.querySelectorAll('p');
  userEvent.click(screen.getByText(/reset/i));
  all.forEach((value) => expect(value.classList).not.toContain('found'));
}, 10000);
