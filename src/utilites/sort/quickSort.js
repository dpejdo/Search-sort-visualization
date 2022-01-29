import { swap } from '../swap';
import { timer } from '../timer';
let partition = async (arr, left, right) => {
  async function load() {
    let pivot = arr[Math.floor((right + left) / 2)],
      i = left,
      j = right;

    while (i <= j) {
      while (arr[i] < pivot) i++;
      while (arr[j] > pivot) j--;
      if (i <= j) {
        let elem1 = document.getElementById(i);
        elem1.style.backgroundColor = 'blue';
        let elem2 = document.getElementById(j);
        elem2.style.backgroundColor = 'blue';
        await timer(20);
        swap(arr, i, j);
        i++;
        j--;
        await timer(20);
        elem1.style.backgroundColor = 'red';
        elem2.style.backgroundColor = 'red';
      }
    }
    return i;
  }
  return await load();
};
let quickSort = async (arr, left, right) => {
  if (arr.length > 1) {
    let index = await partition(arr, left, right);

    if (left < index - 1) {
      await quickSort(arr, left, index - 1);
    }

    if (index < right) {
      await quickSort(arr, index, right);
    }
  }
  return arr;
};
export let quickSortVisual = async (arr) => {
  await quickSort(arr, 0, arr.length - 1);
};
