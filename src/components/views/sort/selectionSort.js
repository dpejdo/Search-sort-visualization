import { selectionSort } from '../../../utilites/sort/selectionSort';
import { Graph } from '../../template/grid/graph';
export const SelectionSortPage = () => {
  return <Graph sort={selectionSort} />;
};
