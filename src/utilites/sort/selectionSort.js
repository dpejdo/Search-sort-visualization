import { swap } from '../swap';
import { timer } from '../timer';
export async function selectionSort(value) {
  async function load() {
    for (let i = 0; i < value.length; i++) {
      let min = i;
      let current = document.getElementById(i);
      //first number that we are comparing
      current.style.backgroundColor = 'purple';
      await timer(40);

      for (let j = i + 1; j < value.length; j++) {
        let current = document.getElementById(j);
        current.style.backgroundColor = 'blue';
        await timer(50);
        if (value[j] < value[min]) min = j;
        current.style.backgroundColor = 'red';
      }
      let minDOM = document.getElementById(min);
      minDOM.style.backgroundColor = 'blue';
      await timer(20);
      swap(value, i, min);
      minDOM.style.backgroundColor = 'red';

      //   first number done with comparing
      current.style.backgroundColor = 'green';
    }
    console.log(value);
    return value;
  }
  await load();
}
