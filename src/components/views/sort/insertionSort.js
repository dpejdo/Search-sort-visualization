import { insertionSort } from '../../../utilites/sort/insertionSort';
import { Graph } from '../../template/grid/graph';
export const InsertionSortPage = () => {
  return <Graph sort={insertionSort} />;
};
