import validator from 'validator';
import { useState } from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState({
    array: [],
    value: '',
    error: '',
    searchValue: '',
    isEmpty: '',
    isFound: '',
    isSorted: false,
  });
  function getValue(x) {
    if (x.label == 'Search') setSearch({ ...search, searchValue: x.value });
    else setSearch({ ...search, value: x.value, isFound: '' });
  }
  function generateArray() {
    let temp = [];
    for (let i = 0; i < 12; i++) {
      temp.push(Math.floor(Math.random() * (100 * 5 - 1) + 1));
    }
    setSearch({ ...search, array: temp });
    resetCss();
  }
  function validate(value) {
    return validator.isInt(value);
  }
  function handleClick() {
    if (search.array.length < 12)
      if (validate(search.value)) {
        setSearch({
          ...search,
          searchValue: '',
          error: '',
          array: [...search.array, Number(search.value)],
          value: '',
          isFound: '',
          isSorted: false,
        });
      } else {
        setSearch({ ...search, error: 'Input only accepts numbers', isFound: '' });
      }
    else setSearch({ ...search, error: 'Reached max length of array', isFound: '' });
  }
  function startSearch(prop, label) {
    console.log(search, prop);
    if (search.searchValue) {
      resetCss();
      isLinear(label);
      setSearch({ ...search, isFound: '' });
      prop([...search.array], 0, search.array.length - 1, Number(search.searchValue)).then(
        (data) => {
          if (data == -1) setSearch({ ...search, isFound: 'Element is not found' });
        }
      );
      setSearch({ ...search, isEmpty: '', isFound: '' });
    } else {
      setSearch({ ...search, isEmpty: 'Please enter the value ' });
    }
  }

  function resetCss() {
    let elements = document.querySelectorAll('.grid p');
    elements.forEach((value) => {
      value.classList.remove('found');
      value.classList.remove('active');
      value.classList.remove('border-values');
      value.classList.remove('prev');
    });
  }
  function removeAll() {
    setSearch({ ...search, array: [], isFound: '' });
  }
  function isLinear(value) {
    if (value !== 'Linear search')
      setSearch({
        ...search,
        array: search.array.sort(function (a, b) {
          return a - b;
        }),
      });
  }
  return {
    search,
    handleClick,
    startSearch,
    getValue,
    resetCss,
    removeAll,
    generateArray,
  };
};
