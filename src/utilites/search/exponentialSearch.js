import { timer } from '../timer';
import { binarySearch } from './binarySearch';
export const exponentialSearch = async (arr, start, end, value) => {
  async function load() {
    document.getElementById(`${String(start)}`).classList.add('active');
    if (arr[start] === value) return start;
    let i = 1;
    document.getElementById(`${String(start)}`).classList.remove('active');
    while (i < end && arr[i] <= value) {
      document.getElementById(`${String(i)}`).classList.add('border-values');
      await timer(1000);
      document.getElementById(`${String(i)}`).classList.remove('border-values');
      i = i * 2;
    }
    return await binarySearch(arr, Math.floor(i / 2), Math.min(i, end), value);
  }
  let result = await load();
  console.log(result);
  if (result == -1) return -1;
};
