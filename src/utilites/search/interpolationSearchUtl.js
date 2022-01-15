import { timer } from '../timer';
export const interpolationSearch = async (arr, start, end, value) => {
  async function load() {
    let low = start;
    let high = end;
    let position = -1;
    let delta = -1;
    while (low <= high && value >= arr[low] && value <= arr[high]) {
      document.getElementById(`${String(low)}`).classList.add('border-values');
      document.getElementById(`${String(end)}`).classList.add('border-values');
      if (position !== -1)
        document.getElementById(`${String(position)}`).classList.remove('active');
      await timer(1000);
      delta = (value - arr[low]) / (arr[high] - arr[low]);
      position = low + Math.floor((high - low) * delta);
      document.getElementById(`${String(position)}`).classList.add('active');
      await timer(250);
      if (arr[position] === value) {
        document.getElementById(`${String(position)}`).classList.add('found');
        return position;
      }
      if (arr[position] < value) {
        document.getElementById(`${String(low)}`).classList.remove('border-values');
        low = position + 1;
      } else {
        document.getElementById(`${String(end)}`).classList.remove('border-values');
        high = position - 1;
      }
    }
    return -1;
  }
  let result = await load();
  console.log(result);
  if (result == -1) return -1;
};
