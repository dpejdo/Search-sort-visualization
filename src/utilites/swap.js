export const swap = (arr, v1, v2) => {
  let temp = arr[v1];
  let tempDOM = document.getElementById(`${v1}`);
  let tempHeight = tempDOM.style.height;
  let tempText = tempDOM.textContent;

  let elem1 = document.getElementById(`${v1}`);
  let elem2 = document.getElementById(`${v2}`);

  arr[v1] = arr[v2];
  elem1.style.height = elem2.style.height;
  elem1.textContent = elem2.textContent;
  arr[v2] = temp;
  elem2.style.height = tempHeight;
  elem2.textContent = tempText;
};
