import { Graph } from '../../template/grid/graph';
import useStore from '../../../store/useStore';
import { Grid } from '../../template/grid/grid';
export const TestPage = () => {
  let name = useStore((state) => state);
  return name.isSort ? (
    <Graph />
  ) : (
    <Grid label={name.currentFunctionName} func={name.currentFunction} />
  );
};
