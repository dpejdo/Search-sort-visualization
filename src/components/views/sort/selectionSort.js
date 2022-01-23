import { selectionSort } from '../../../utilites/sort/selectionSort';
import { Graph } from '../../template/grid/graph';
const SelectionSortPage = () => {
  return <Graph sort={selectionSort} />;
};
export default SelectionSortPage;
