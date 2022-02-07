import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/nav';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
