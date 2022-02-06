import useStore from './store/useStore';
import './App.css';
import { Grid } from './components/template/grid/grid';
import { Graph } from './components/template/grid/graph';
function App() {
  let name = useStore((state) => state);
  return name.isSort ? (
    <Graph />
  ) : (
    <Grid label={name.currentFunctionName} func={name.currentFunction} />
  );
}

export default App;
