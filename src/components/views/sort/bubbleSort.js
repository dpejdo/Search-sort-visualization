import { bubbleSort } from '../../../utilites/sort/bubbleSort';
import { Graph } from '../../template/grid/graph';
export const BubbleSortPage = () => {
  return <Graph sort={bubbleSort} />;
};
