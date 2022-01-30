import { useState } from 'react';
import { ARRAY } from '../../../utilites/genArray';
export const Graph = (prop) => {
  const { sort, label } = prop;
  const [array] = useState(ARRAY);

  return (
    <div>
      <div data-testid="graph" className="flex justify-center items-start h-2/3 max-h-full">
        {array.map((value, index) => (
          <div
            className="border bg-red-600 w-10 text-center pillar"
            id={`${String(index)}`}
            key={index}
            style={{ height: 100 + value + 'px', transition: ' 0.2s all ease' }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="flex justify-center m-10 items-center flex-col">
        <button className="border text-center px-5 py-2 bg-blue-600" onClick={() => sort(array)}>
          Swap
        </button>
        <h2>{label}</h2>
      </div>
    </div>
  );
};
