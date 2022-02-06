import { swap } from '../swap';
import { timer } from '../timer';
export async function bubbleSort(arr) {
  async function load() {
    for (let i = 0; i < arr.length; i++) {
      await timer(100);
      for (let j = 1; j < arr.length - i; j++) {
        let current = document.getElementById(j);
        let prev = document.getElementById(j - 1);
        current.style.backgroundColor = 'blue';
        prev.style.backgroundColor = 'blue';
        await timer(150);
        if (arr[j - 1] > arr[j]) swap(arr, j - 1, j);
        await timer(120);
        current.style.backgroundColor = 'red';
        prev.style.backgroundColor = 'red';
      }
      let current = document.getElementById(arr.length - i - 1);
      current.style.backgroundColor = 'green';
    }
  }
  load();
  console.log(arr);
}
