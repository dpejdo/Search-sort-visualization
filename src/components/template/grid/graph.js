import { useEffect } from 'react';
import useStore from '../../../store/useStore';
export const Graph = () => {
  const array = useStore((state) => state.array);
  const setArray = useStore((state) => state.setArray);
  useEffect(() => {
    setArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div data-testid="graph" className="flex justify-center items-start h-2/3 max-h-full">
        {array.map((value, index) => (
          <div
            className="border bg-red-600 w-10 text-center pillar"
            id={`${String(index)}`}
            key={index}
            style={{ height: 100 + value / 1.5 + 'px', transition: ' 0.2s all ease' }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
