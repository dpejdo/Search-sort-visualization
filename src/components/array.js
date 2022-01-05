import { useState } from 'react';
import { Input } from './template/input/input';
let Array = () => {
  const [value, setValue] = useState('');
  const [array, setArray] = useState([]);
  const handleClick = () => {
    setArray((arr) => [...arr, Number(value)]);
  };

  const addInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="">
      <form>
        <Input value={value} handleChange={addInput} />
        <button className="border" type="button" onClick={handleClick}>
          Add value
        </button>
      </form>
      <div className={`grid grid-rows-1 grid-cols-12 w-3/6`}>
        {array.map((value, index) => (
          <p
            id={`${String(index)}`}
            className="bg-red-600 border text-center leading-8"
            key={index}
          >
            {value}
          </p>
        ))}
      </div>
      <button className="bg-red-300 rounded p-4" type="button">
        Search
      </button>
      <button className="bg-red-300 rounded p-4" type="button">
        Reset
      </button>
      <style>{css}</style>
    </div>
  );
};

export default Array;
