import { quickSortVisual } from '../../../utilites/sort/quickSort';
import { Graph } from '../../template/grid/graph';
export const QuickSortPage = () => {
  return <Graph sort={quickSortVisual} />;
};
