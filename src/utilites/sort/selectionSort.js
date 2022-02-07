import { swap } from '../swap';
import { timer } from '../timer';
export async function selectionSort(value) {
  async function load() {
    for (let i = 0; i < value.length; i++) {
      let min = i;
      let current = document.getElementById(i);
      current.style.backgroundColor = 'purple';
      await timer(100);

      for (let j = i + 1; j < value.length; j++) {
        let current = document.getElementById(j);
        current.style.backgroundColor = 'blue';
        await timer(100);
        if (value[j] < value[min]) min = j;
        current.style.backgroundColor = 'red';
      }
      let minDOM = document.getElementById(min);
      minDOM.style.backgroundColor = 'purple';
      await timer(160);
      swap(value, i, min);

      minDOM.style.backgroundColor = 'purple';
      await timer(160);
      minDOM.style.backgroundColor = 'red';

      current.style.backgroundColor = 'green';
    }
    console.log(value);
    return value;
  }
  await load();
  return false;
}
