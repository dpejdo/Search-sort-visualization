import { timer, handleActive } from '../timer';

export const binarySearch = async (arr, start, end, x) => {
  async function load() {
    let mid = Math.floor((end + start) / 2);
    document.getElementById(`${String(start)}`).classList.add('bg-yellow-400');
    document.getElementById(`${String(end)}`).classList.add('bg-yellow-400');
    handleActive(mid);
    await timer(2000);
    if (arr[mid] === x) {
      document.getElementById(`${String(mid)}`).classList.remove('active');
      document.getElementById(`${String(mid)}`).classList.add('found');
      return mid;
    }
    if (start >= end) return -1;

    document.getElementById(`${String(end)}`).classList.remove('bg-yellow-400');
    document.getElementById(`${String(start)}`).classList.remove('bg-yellow-400');
    document.getElementById(`${String(mid)}`).classList.remove('active');
    if (mid < x) return binarySearch(arr, mid + 1, end, x);
    else return binarySearch(arr, start, mid - 1, x);
  }
  let result = await load();
  console.log(result);
  if (result == -1) return -1;
};
