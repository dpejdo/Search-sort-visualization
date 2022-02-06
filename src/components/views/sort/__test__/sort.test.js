import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { timer } from '../../../../utilites/timer';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../../nav';
import { Graph } from '../../../template/grid/graph';
async function wait(value) {
  await timer(value);
}
const arr = [
  'selection sort',
  'bubble sort',
  'insertion sort',
  'merge sort',
  'heap sort',
  'quick sort',
];
for (let j = 0; j < arr.length; j++)
  for (let i = 0; i < 5; i++)
    test(`${arr[j]}`, async () => {
      let nav = render(<Navbar />);
      let navButton = nav.getByRole('button', { name: /sort/i });
      console.log(navButton);
      userEvent.click(navButton);
      let algoButton = nav.getByTestId(`${arr[j]}`);
      userEvent.click(algoButton);
      let compontet = render(<Graph />);
      let element = compontet.getByTestId('graph');
      let all = element.querySelectorAll('div');
      let arrayOfElem = [];
      for (let value of all) arrayOfElem.push(value.textContent);
      console.log(arrayOfElem);
      let button = nav.getByRole('button', { name: /start/i });
      userEvent.click(button);

      await wait(20000);
      let newArray = [];
      for (let value of all) newArray.push(value.textContent);
      console.log(newArray);
      expect(newArray).toEqual(arrayOfElem.sort((a, b) => a - b));
    }, 22000);
