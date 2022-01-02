export const Grid = (prop) => {
  return (
    <div data-testid="grid" id="grid" className="">
      <form>
        <label className="block p-2">Add value</label>
        <input className="m-2 border" type="text" value={prop.value} onChange={prop.setValue} />
        <button className="border" type="button" onClick={prop.handleClick}>
          Add value
        </button>
      </form>
      <div className={`grid grid-rows-1 grid-cols-12 w-3/6`}>
        {/* {array.map((value, index) => (
          <p
            id={`${String(index)}`}
              className="bg-red-600 border text-center leading-8"
            key={index}
          >
            {value}
          </p>
        ))} */}
      </div>
      <button className="bg-red-300 rounded p-4" type="button" onClick={prop.output}>
        Search
      </button>
      <button className="bg-red-300 rounded p-4" type="button">
        Reset
      </button>
      {/* <style>{css}</style> */}
    </div>
  );
};
