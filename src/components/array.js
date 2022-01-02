import { useState } from 'react';

let Array = () => {
  const [value, setValue] = useState('');
  const [array, setArray] = useState([]);
  const handleClick = () => {
    setArray((arr) => [...arr, Number(value)]);
  };
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const linearSearch = async (arr, x) => {
    async function load() {
      for (let i = 0; i < arr.length; i++) {
        let element;
        if (i > 0) {
          //funkcija za micanje  classe
          element = document.getElementById(`${String(Number(i - 1))}`);
          console.log(element.classList);
          element.classList.remove('active');
        }
        if (arr[i] === x) {
          let element = document.getElementById(`${String(i)}`);
          element.classList.add('bg-green-300');
          return i;
        }

        handleActive(i);
        console.log(arr[i]);
        await timer(1000);
      }
    }
    await load();
    return -1;
  };
  const output = () => {
    console.log(linearSearch(array, 3));
  };
  const handleActive = (index) => {
    let element = document.getElementById(`${String(index)}`);
    element.classList.add('active');
  };
  const css = ` .active {
          background:blue;
          border:1px solid purple
        }
  `;
  return (
    <div className="">
      <form>
        <label className="block p-2">Add value</label>
        <input
          className="m-2 border"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
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
      <button className="bg-red-300 rounded p-4" type="button" onClick={output}>
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
