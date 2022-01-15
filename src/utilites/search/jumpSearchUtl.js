import { timer } from '../timer';

export const jumpSearch = async (arr, start, end, value) => {
  async function load() {
    let sizeOfJump = Math.floor(Math.sqrt(arr.length - 1));
    let jump = sizeOfJump;
    let prev = 0;
    document.getElementById(`${String(Number(jump))}`).classList.add('active');
    while (arr[Math.min(jump, end)] < value) {
      await timer(1000);
      document.getElementById(`${String(Number(jump))}`).classList.remove('active');
      prev += sizeOfJump;
      jump += sizeOfJump;
      if (prev >= end) return -1;
      document.getElementById(`${String(Number(jump))}`).classList.add('active');
    }
    for (let i = 0; i <= sizeOfJump; i++) {
      document.getElementById(`${String(Number(prev + i))}`).classList.add('prev');
      await timer(1000);
      if (arr[prev + i] === value) {
        document.getElementById(`${String(Number(prev + i))}`).classList.add('found');
        return prev + i;
      }
      document.getElementById(`${String(Number(prev + i))}`).classList.remove('prev');
    }
    return -1;
  }
  let result = await load();
  console.log(result);
  if (result == -1) return -1;
};
