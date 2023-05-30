import * as algorithm from './sort';
import * as search from './search';
import { useReducer } from 'react';
const reducer = (state, action) => {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'Selection sort':
      return { algorithm: algorithm.selectionSort, name: action.type, isSort: true };
    case 'Bubble sort':
      return { algorithm: algorithm.bubbleSort, name: action.type, isSort: true };
    case 'Insertion sort':
      return { algorithm: algorithm.insertionSort, name: action.type, isSort: true };
    case 'Heap sort':
      return { algorithm: algorithm.heapSort, name: action.type, isSort: true };
    case 'Merge sort':
      return { algorithm: algorithm.visual, name: action.type, isSort: true };
    case 'Quick sort':
      return { algorithm: algorithm.quickSortVisual, name: action.type, isSort: true };
    case 'Linear search':
      return { algorithm: search.linearSearch, name: action.type, isSort: false };
    case 'Binary search':
      return { algorithm: search.binarySearch, name: action.type, isSort: false };
    case 'Exponential search':
      return { algorithm: search.exponentialSearch, name: action.type, isSort: false };
    case 'Interpolation search':
      return { algorithm: search.interpolationSearch, name: action.type, isSort: false };
    case 'Jump search':
      return { algorithm: search.jumpSearch, name: action.type, isSort: false };

    default:
      throw new Error('error in action', action.type);
  }
};
export const useAlgorithm = () => {
  const [state, dispatch] = useReducer(reducer, {
    algorithm: algorithm.selectionSort,
    isSort: true,
    name: 'Selection sort',
  });
  return [state, dispatch];
};
