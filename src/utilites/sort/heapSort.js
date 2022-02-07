import { timer } from '../timer';

async function heapify(arr, n, i) {
  async function load() {
    let biggest = i,
      left = 2 * i + 1,
      right = left + 1;

    if (left < n && arr[left] > arr[biggest]) biggest = left;
    if (right < n && arr[right] > arr[biggest]) biggest = right;
    if (i !== biggest) {
      let temp = arr[i];
      let key1 = document.getElementById(i);
      let value = key1.textContent;
      let height = key1.style.height;
      let key2 = document.getElementById(biggest);
      key1.textContent = key2.textContent;
      key1.style.height = key2.style.height;
      key2.textContent = value;
      key2.style.height = height;
      key2.style.backgroundColor = 'purple';
      key1.style.backgroundColor = 'purple';
      await timer(300);
      arr[i] = arr[biggest];
      arr[biggest] = temp;
      await heapify(arr, n, biggest);
    }
  }
  await load();
}

export async function heapSort(arr) {
  let temp = [...arr];
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    await heapify(temp, arr.length, i);
  }

  for (let i = temp.length - 1; i > 0; i--) {
    let key1 = document.getElementById(i);
    let value = key1.textContent;
    let height = key1.style.height;
    let key2 = document.getElementById(0);
    key1.textContent = key2.textContent;
    key1.style.height = key2.style.height;
    key2.textContent = value;
    key2.style.height = height;
    key2.style.backgroundColor = 'green';
    key1.style.backgroundColor = 'green';
    await timer(200);
    let swap = temp[0];
    temp[0] = temp[i];
    temp[i] = swap;
    await heapify(temp, i, 0);
  }
  return false;
}
