import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { timer } from '../../../../utilites/timer';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

async function wait(value) {
  await timer(value);
}
export async function templateTest(Comp, value) {
  render(<Comp />);
  let element = screen.getByTestId('graph');
  let all = element.querySelectorAll('div');
  let arrayOfElem = [];
  for (let value of all) arrayOfElem.push(value.textContent);
  console.log(arrayOfElem);
  let button = screen.getByRole('button', {
    name: /swap/i,
  });
  userEvent.click(button);

  await wait(value);
  let newArray = [];
  for (let value of all) newArray.push(value.textContent);
  console.log(newArray);
  return expect(newArray).toEqual(arrayOfElem.sort((a, b) => a - b));
}
