import { Input } from '../input/input';
import { useSearch } from '../../../utilites/useSearch';

export const Grid = (prop) => {
  const { handleClick, startSearch, getValue, resetCss, search, removeAll, generateArray } =
    useSearch();
  function onKeyDown(e) {
    if (e.target.id == 'element_input') {
      if (e.key == 'Enter') {
        handleClick();
      }
    }
    if (e.target.id == 'search_input') {
      if (e.key == 'Enter') startSearch(prop.func, prop.label);
    }
  }
  return (
    <div className="flex justify-center content center">
      <div
        data-testid="grid"
        id="grid"
        className="font-serif tracking-wide w-2/4 flex flex-col items-center"
      >
        {/* <h1 className="text-2xl font-black ">{prop.label}</h1> */}
        <button className="rounded p-2 m-2 bg-black" onClick={generateArray}>
          Fill array
        </button>
        <div className="w-full max-w-lg">
          <Input getValue={getValue} value={search.value} onKeyDown={onKeyDown} />
          {search.error && <p className="absolute text-red-600">{search.error}</p>}
          <button data-testid="add-btn" className="rounded p-2 m-2 bg-black" onClick={handleClick}>
            Add value
          </button>
          <button className="rounded p-2 m-2 bg-black" onClick={removeAll}>
            Remove all elements
          </button>
        </div>
        <div className="my-6 w-full max-w-lg">
          <Input
            label="Search"
            getValue={getValue}
            value={search.searchValue}
            onKeyDown={onKeyDown}
          />
          {search.isEmpty && <p className="absolute text-red-600">{search.isEmpty}</p>}
          <button
            className="rounded p-2 m-2 bg-black"
            type="button"
            onClick={() => startSearch(prop.func, prop.label)}
          >
            Search
          </button>
          <button className="rounded p-2 m-2 bg-black" type="button" onClick={resetCss}>
            Reset
          </button>
        </div>
        <div className="flex justify-center content center  w-full my-6">
          <div className={`grid grid-rows-1 grid-cols-12 w-full`} data-testid="array">
            {search.array.map((value, index) => (
              <p
                id={`${String(index)}`}
                className="bg-gray-500/60 border text-center leading-8"
                key={index}
                data-testid={value}
                style={{ transition: ' 0.2s all ease' }}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
        {search.isFound && <p>{search.isFound}</p>}
      </div>
    </div>
  );
};
