/* eslint-disable react/prop-types */
export const Graph = ({ array }) => {
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
