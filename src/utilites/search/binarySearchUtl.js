import { timer, handleActive } from '../timer';

export const binarySearch = async (arr, start, end, x) => {
  async function load() {
    let mid = Math.floor((end + start) / 2);
    document.getElementById(`${String(start)}`).classList.add('border-values');
    document.getElementById(`${String(end)}`).classList.add('border-values');
    handleActive(mid);
    await timer(1500);
    if (arr[mid] === x) {
      document.getElementById(`${String(mid)}`).classList.remove('active');
      document.getElementById(`${String(mid)}`).classList.add('found');
      return mid;
    }
    if (start >= end) return -1;

    document.getElementById(`${String(end)}`).classList.remove('border-values');
    document.getElementById(`${String(start)}`).classList.remove('border-values');
    document.getElementById(`${String(mid)}`).classList.remove('active');
    if (arr[mid] < x) return binarySearch(arr, mid + 1, end, x);
    else return binarySearch(arr, start, mid - 1, x);
  }
  let result = await load();
  if (result == -1) return -1;
};
