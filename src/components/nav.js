import useStore from '../store/useStore';
import { useEffect, useState } from 'react';
import { useAlgorithm } from '../utilites/reducer';
const resetStyle = () => {
  const allElements = document.querySelectorAll('.pillar');
  allElements.forEach((value) => (value.style.backgroundColor = 'red'));
};
function Navbar() {
  const [value, setValue] = useState('1');
  const [algorithm, setAlgorithm] = useAlgorithm();
  const [isDisabled, setDisabled] = useState(false);
  let reset = useStore((state) => state.setArray);
  let setSpeed = useStore((state) => state.setSpeed);
  let get = useStore((state) => state);
  useEffect(() => {
    get.setFunction(algorithm);
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
                    setAlgorithm({ type: e.target.textContent });
                    resetStyle();
                    reset();
                  }}
                >
                  <li>
                    <a
                      // href="/linear-search"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Linear search
                    </a>
                  </li>
                  <li>
                    <a
                      // href="/binary-search"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Binary search
                    </a>
                  </li>
                  <li>
                    <a
                      /*  href="/jump-search" */
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Jump search
                    </a>
                  </li>
                  <li>
                    <a
                      // href="/exponential-search"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Exponential search
                    </a>
                  </li>
                  <li>
                    <a
                      // href="/interpolation-search"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Interpolation search
                    </a>
                  </li>
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
                    setAlgorithm({ type: e.target.textContent });
                    resetStyle();
                    reset();
                  }}
                >
                  <li>
                    <a
                      // href="/selection-sort"
                      data-testid="selection sort"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Selection sort
                    </a>
                  </li>
                  <li>
                    <a
                      // href="/bubble-sort"
                      data-testid="bubble sort"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Bubble sort
                    </a>
                  </li>
                  <li>
                    <a
                      // href="/insertion-sort"
                      data-testid="insertion sort"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Insertion sort
                    </a>
                  </li>
                  <li>
                    <a
                      // href="/merge-sort"
                      data-testid="merge sort"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Merge sort
                    </a>
                  </li>
                  <li>
                    <a
                      // href="/heap-sort"
                      data-testid="heap sort"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Heap sort
                    </a>
                  </li>
                  <li>
                    <a
                      // href="/quick-sort"
                      data-testid="quick sort"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Quick sort
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {get.isSort && (
              <button
                className="border px-2"
                type="button"
                onClick={() => {
                  reset();
                  resetStyle();
                }}
                disabled={isDisabled}
              >
                New array
              </button>
            )}
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
                  setSpeed(e.target.value);
                  get.setLimit(e.target.value);
                  get.setArray();
                  resetStyle();
                }}
              />
              <label className="px-3" htmlFor="volume">
                Speed
              </label>
              {get.isSort && (
                <button
                  className="border px-2"
                  type="button"
                  onClick={() => {
                    setDisabled(true);
                    console.log(algorithm.algorithm(get.array).then((data) => setDisabled(data)));
                  }}
                  disabled={isDisabled}
                >
                  Start
                </button>
              )}
              <p className="px-3 font-extrabold">{get.currentFunctionName}</p>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
