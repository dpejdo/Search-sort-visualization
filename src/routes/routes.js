import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import {
  LinearSearchPage,
  BinarySearchPage,
  JumpSearchPage,
  InterpolationSearchPage,
  ExponentialSearchPage,
} from '../components/views/search';
import {
  SelectionSortPage,
  BubbleSortPage,
  InsertionSortPage,
  MergeSortPage,
  HeapSortPage,
  QuickSortPage,
} from '../components/views/sort';
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
