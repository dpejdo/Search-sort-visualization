import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import LinearSearchPage from '../components/views/search/linearSearch';
import BinarySearchPage from '../components/views/search/binarySearch';
import JumpSearchPage from '../components/views/search/jumpSearch';
import InterpolationSearchPage from '../components/views/search/interpolationSearch';
import ExponentialSearchPage from '../components/views/search/exponentailSearch';
import SelectionSortPage from '../components/views/sort/selectionSort';
import BubbleSortPage from '../components/views/sort/bubbleSort';
import InsertionSortPage from '../components/views/sort/insertionSort';
import MergeSortPage from '../components/views/sort/mergeSort';
import HeapSortPage from '../components/views/sort/heapSort';
import QuickSortPage from '../components/views/sort/quickSort';
import Navbar from '../components/nav';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/linear-search" element={<LinearSearchPage />} />
        <Route path="/binary-search" element={<BinarySearchPage />} />
        <Route path="/jump-search" element={<JumpSearchPage />} />
        <Route path="/interpolation-search" element={<InterpolationSearchPage />} />
        <Route path="/exponential-search" element={<ExponentialSearchPage />} />
        <Route path="/selection-sort" element={<SelectionSortPage />} />
        <Route path="/bubble-sort" element={<BubbleSortPage />} />
        <Route path="/insertion-sort" element={<InsertionSortPage />} />
        <Route path="/merge-sort" element={<MergeSortPage />} />
        <Route path="/heap-sort" element={<HeapSortPage />} />
        <Route path="/quick-sort" element={<QuickSortPage />} />
      </Routes>
    </BrowserRouter>
  );
};
