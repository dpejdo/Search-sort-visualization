/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useAlgorithm } from '../utilites/reducer';
const resetStyle = () => {
  const allElements = document.querySelectorAll('.pillar');
  allElements.forEach((value) => (value.style.backgroundColor = 'red'));
};
const SEARCH = [
  'Linear search',
  'Binary search',
  'Jump search',
  'Exponential search',
  'Interpolation search',
];
const SORT = [
  'Selection sort',
  'Bubble sort',
  'Insertion sort',
  'Merge sort',
  'Heap sort',
  'Quick sort',
];

function Navbar({ handleClick, setArray, factor }) {
  const [value, setValue] = useState('1');
  const [algorithm, setAlgorithm] = useAlgorithm();
  const [isDisabled, setDisabled] = useState(false);
  useEffect(() => {
    factor.setFunction(algorithm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [algorithm, setAlgorithm]);

  return (
    <nav className="px-2 py-2 bg-gray-800/90 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex justify-center items-center ml-3 text-white rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:flex md:justify-center" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdownSearch"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                disabled={isDisabled}
              >
                Search
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdownSearch"
                className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1"
                  aria-labelledby="dropdownButton"
                  onClick={(e) => {
                    handleClick(false);
                    setAlgorithm({ type: e.target.textContent });
                    resetStyle();
                    factor.setArray();
                  }}
                >
                  {SEARCH.map((val) => (
                    <li key={val}>
                      <a
                        // href="/linear-search"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        {val}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdownSort"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                disabled={isDisabled}
              >
                Sort
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdownSort"
                className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1"
                  aria-labelledby="dropdownButton"
                  onClick={(e) => {
                    handleClick(true);
                    setAlgorithm({ type: e.target.textContent });
                    resetStyle();
                    factor.setArray();
                  }}
                >
                  {SORT.map((val) => (
                    <li key={val}>
                      <a
                        // href="/selection-sort"
                        data-testid={val.toLowerCase()}
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        {val}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {factor.getFunction().isSort && (
              <button
                className="border px-2"
                type="button"
                onClick={() => {
                  factor.setArray();
                  resetStyle();
                }}
                disabled={isDisabled}
              >
                New array
              </button>
            )}
            {factor.getFunction().isSort && (
              <div className="flex justify-around content-center">
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="1"
                  max="5"
                  value={value}
                  disabled={isDisabled}
                  onChange={(e) => {
                    setValue(e.target.value);
                    factor.setSpeed(e.target.value);
                    factor.setLimit(e.target.value);
                    factor.setArray();
                    setArray(factor.getArray());
                    resetStyle();
                  }}
                />

                <label className="px-3" htmlFor="volume">
                  Speed
                </label>
                <button
                  className="border px-2"
                  type="button"
                  onClick={() => {
                    setDisabled(true);
                    console.log(
                      algorithm.algorithm(factor.getArray()).then((data) => setDisabled(data))
                    );
                  }}
                  disabled={isDisabled}
                >
                  Start
                </button>
              </div>
            )}
            <p className="px-3 font-extrabold">{algorithm.name}</p>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
