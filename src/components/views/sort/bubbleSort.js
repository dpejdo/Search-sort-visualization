import { bubbleSort } from '../../../utilites/sort/bubbleSort';
import { Graph } from '../../template/grid/graph';
const BubbleSortPage = () => {
  return <Graph sort={bubbleSort} />;
};
export default BubbleSortPage;
