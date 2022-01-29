const ANIMATION_SPEED = 30;

function mergeSort(arr) {
  const animations = [];
  console.log(arr);
  if (arr.length <= 1) return arr;
  const secondaryArray = [...arr];
  mergeSortHelper(arr, 0, arr.length - 1, secondaryArray, animations);
  return animations;
}
function mergeSortHelper(mainArray, startIdx, endIdx, secondaryArray, animations) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(secondaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(secondaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, secondaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, secondaryArray, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (secondaryArray[i] <= secondaryArray[j]) {
      animations.push([k, secondaryArray[i]]);
      mainArray[k++] = secondaryArray[i++];
    } else {
      animations.push([k, secondaryArray[j]]);
      mainArray[k++] = secondaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, secondaryArray[i]]);
    mainArray[k++] = secondaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, secondaryArray[j]]);
    mainArray[k++] = secondaryArray[j++];
  }
}

export function visual(arr) {
  const animations = mergeSort(arr);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('pillar');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? 'purple' : 'blue';
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOne = arrayBars[barOneIdx];
        /*         barOne.style.backgroundColor = 'purple'; */
        barOne.style.height = `${newHeight + 100}px`;
        barOne.textContent = newHeight;
        /*       setTimeout(() => {}, i * (ANIMATION_SPEED * 0.1)); */
        /*     barOne.style.backgroundColor = 'red'; */
      }, i * ANIMATION_SPEED);
    }
  }
}
