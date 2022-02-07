import { timer } from '../timer';
const ANIMATION_SPEED = 300;
export async function insertionSort(arr) {
  async function load() {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let domKey = document.getElementById(i);
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        let key1 = document.getElementById(j + 1);
        let value = key1.textContent;
        let height = key1.style.height;
        let key2 = document.getElementById(j);
        key1.textContent = key2.textContent;
        key1.style.height = key2.style.height;
        key2.textContent = value;
        key2.style.height = height;
        key2.style.backgroundColor = 'purple';
        key1.style.backgroundColor = 'purple';

        await timer(ANIMATION_SPEED);

        arr[j + 1] = arr[j];
        j--;
        key1.style.backgroundColor = 'green';
        key2.style.backgroundColor = 'green';
      }
      await timer(ANIMATION_SPEED);

      domKey.style.backgroundColor = 'green';
      arr[j + 1] = key;
    }
  }
  await load();
}
