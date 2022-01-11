import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import LinearSearchPage from '../components/views/linearSearch';
import BinarySearchPage from '../components/views/binarySearch';
import JumpSearchPage from '../components/views/jumpSearch';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/linear-search" element={<LinearSearchPage />} />
        <Route path="/binary-search" element={<BinarySearchPage />} />
        <Route path="/jump-search" element={<JumpSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};
