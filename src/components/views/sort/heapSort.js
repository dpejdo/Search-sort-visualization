import { heapSort } from '../../../utilites/sort/heapSort';
import { Graph } from '../../template/grid/graph';
export const HeapSortPage = () => {
  return <Graph sort={heapSort} />;
};
