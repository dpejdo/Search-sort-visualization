import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import LinearSearchPage from '../components/views/search/linearSearch';
import BinarySearchPage from '../components/views/search/binarySearch';
import JumpSearchPage from '../components/views/search/jumpSearch';
import InterpolationSearchPage from '../components/views/search/interpolationSearch';
import ExponentialSearchPage from '../components/views/search/exponentailSearch';
import SelectionSortPage from '../components/views/sort/selectionSort';
import BubbleSortPage from '../components/views/sort/bubbleSort';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/linear-search" element={<LinearSearchPage />} />
        <Route path="/binary-search" element={<BinarySearchPage />} />
        <Route path="/jump-search" element={<JumpSearchPage />} />
        <Route path="/interpolation-search" element={<InterpolationSearchPage />} />
        <Route path="/exponential-search" element={<ExponentialSearchPage />} />
        <Route path="/selection-sort" element={<SelectionSortPage />} />
        <Route path="/bubble-sort" element={<BubbleSortPage />} />
      </Routes>
    </BrowserRouter>
  );
};
