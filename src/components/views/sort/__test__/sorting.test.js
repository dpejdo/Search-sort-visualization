import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectionSortPage from '../selectionSort';
/* import { selectionSort } from '../../../../utilites/sort/selectionSort';
import { ARRAY } from '../../../../utilites/genArray'; */
import userEvent from '@testing-library/user-event';
import { timer } from '../../../../utilites/timer';
import BubbleSortPage from '../bubbleSort';
for (let i = 0; i < 5; i++) {
  test('is sorted', async () => {
    render(<SelectionSortPage />);
    let element = screen.getByTestId('graph');
    let all = element.querySelectorAll('div');
    let arrayOfElem = [];
    for (let value of all) arrayOfElem.push(value.textContent);
    console.log(arrayOfElem);
    let button = screen.getByRole('button', {
      name: /swap/i,
    });
    userEvent.click(button);
    async function wait() {
      await timer(5000);
    }
    await wait();
    let newArray = [];
    for (let value of all) newArray.push(value.textContent);
    expect(newArray).toEqual(arrayOfElem.sort((a, b) => a - b));
  }, 7000);

  test('is sorted', async () => {
    render(<BubbleSortPage />);
    let element = screen.getByTestId('graph');
    let all = element.querySelectorAll('div');
    let arrayOfElem = [];
    for (let value of all) arrayOfElem.push(value.textContent);
    console.log(arrayOfElem);
    let button = screen.getByRole('button', {
      name: /swap/i,
    });
    userEvent.click(button);
    async function wait() {
      await timer(5000);
    }
    await wait();
    let newArray = [];
    for (let value of all) newArray.push(value.textContent);
    expect(newArray).toEqual(arrayOfElem.sort((a, b) => a - b));
  }, 7000);
}
/* test('selection sort ', () => {
  expect(selectionSort(ARRAY)).toEqual(ARRAY.sort((a, b) => a - b));
}); */
