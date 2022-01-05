import { useState } from 'react';
import { Input } from '../input/input';
import validator from 'validator';
import { linearSearch } from '../../../utilites/sort/linearSort';
export const Grid = () => {
  const [Array, setArray] = useState([]);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  function getValue(x) {
    setValue(x);
  }
  function validate(value) {
    return validator.isInt(value);
  }
  function handleClick() {
    if (validate(value)) {
      setArray((arr) => [...arr, Number(value)]);
      setError('');
      setValue('');
      console.log(Array);
    } else {
      setError('Input only accepts numbers');
    }
  }
  function startSearch() {
    linearSearch(Array, 3);
  }
  return (
    <div data-testid="grid" id="grid" className="">
      <Input getValue={getValue} value={value} />
      {error && <p>{error}</p>}
      <button data-testid="add-btn" className="rounded p-2 m-2 bg-red-600" onClick={handleClick}>
        Add value
      </button>
      <div className={`grid grid-rows-1 grid-cols-12 w-3/6`}>
        {Array.map((value, index) => (
          <p
            id={`${String(index)}`}
            className="bg-red-600 border text-center leading-8"
            key={index}
          >
            {value}
          </p>
        ))}
      </div>
      <button className="bg-red-300 rounded p-4" type="button" onClick={startSearch}>
        Search
      </button>
      <button className="bg-red-300 rounded p-4" type="button">
        Reset
      </button>
      {/* <style>{css}</style> */}
    </div>
  );
};
