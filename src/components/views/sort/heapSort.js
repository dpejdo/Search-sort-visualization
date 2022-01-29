import { heapSort } from '../../../utilites/sort/heapSort';
import { Graph } from '../../template/grid/graph';
const HeapSortPage = () => {
  return <Graph sort={heapSort} />;
};
export default HeapSortPage;
