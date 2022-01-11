import { timer, handleActive } from '../timer';
export const linearSearch = async (arr, start, end, x) => {
  async function load() {
    for (let i = 0; i < arr.length; i++) {
      let element;
      if (i > 0) {
        element = document.getElementById(`${String(Number(i - 1))}`);
        element.classList.remove('active');
      }
      if (arr[i] === x) {
        let element = document.getElementById(`${String(i)}`);
        element.classList.add('found');
        return i;
      }

      handleActive(i);
      await timer(1000);
    }
    document.getElementById(`${String(Number(arr.length - 1))}`).classList.remove('active');
  }
  let result = await load();
  if (result == undefined) return -1;
};
