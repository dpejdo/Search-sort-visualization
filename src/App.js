import factor from './store/useStore';
import './App.css';
import { Grid } from './components/template/grid/grid';
import { Graph } from './components/template/grid/graph';
import Navbar from './components/nav';
import { useState } from 'react';
const name = factor();
name.setArray();
function App() {
  const [isSort, setIsSort] = useState(name.isSort);
  const [array, setArray] = useState(name.getArray());
  const handleClick = (val) => {
    setIsSort(val);
  };
  return (
    <>
      <Navbar name={name} handleClick={handleClick} setArray={setArray} factor={name} />
      {isSort ? (
        <Graph array={array} />
      ) : (
        <Grid
          label={name.getFunction().currentFunctionName}
          func={name.getFunction().currentFunction}
        />
      )}
    </>
  );
}

export default App;
