import { useState } from 'react';
import { ARRAY } from '../../../utilites/genArray';
export const Graph = (prop) => {
  const { sort } = prop;
  const [array] = useState(ARRAY);

  return (
    <div data-testid="graph" className="flex justify-center content-center h-2/3 max-h-full">
      {array.map((value, index) => (
        <div
          className="border bg-red-600 w-10 text-center"
          id={`${String(index)}`}
          key={index}
          style={{ height: 100 + value + 'px' }}
        >
          {value}
        </div>
      ))}
      <button onClick={() => sort(array)}>Swap</button>
    </div>
  );
};
