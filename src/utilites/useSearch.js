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
  function validate(value) {
    return validator.isInt(value);
  }
  function handleClick() {
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
  }
  function startSearch(prop, label) {
    if (search.searchValue) {
      resetCss();
      isLinear(label);
      setSearch({ ...search, isFound: '' });
      prop(search.array, 0, search.array.length - 1, Number(search.searchValue)).then((data) => {
        if (data == -1) setSearch({ ...search, isFound: 'Element is not found' });
      });
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
  };
};
