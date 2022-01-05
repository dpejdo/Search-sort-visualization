import { timer } from './timer';

export const linearSearch = async (arr, x) => {
  async function load() {
    for (let i = 0; i < arr.length; i++) {
      let element;
      if (i > 0) {
        element = document.getElementById(`${String(Number(i - 1))}`);
        console.log(element.classList);
        element.classList.remove('active');
      }
      if (arr[i] === x) {
        let element = document.getElementById(`${String(i)}`);
        element.classList.add('bg-green-900');
        return i;
      }

      handleActive(i);
      console.log(arr[i]);
      await timer(1000);
    }
  }
  await load();
  return -1;
};
export const output = (arr, value) => {
  console.log(linearSearch(arr, value));
};
const handleActive = (index) => {
  let element = document.getElementById(`${String(index)}`);
  element.classList.add('active');
};
