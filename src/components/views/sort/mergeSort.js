import { visual } from '../../../utilites/sort/mergeSort';
import { Graph } from '../../template/grid/graph';
const MergeSortPage = () => {
  return <Graph sort={visual} label={'Merge sort'} />;
};
export default MergeSortPage;
