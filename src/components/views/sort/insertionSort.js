import { insertionSort } from '../../../utilites/sort/insertionSort';
import { Graph } from '../../template/grid/graph';
const InsertionSortPage = () => {
  return <Graph sort={insertionSort} />;
};
export default InsertionSortPage;
