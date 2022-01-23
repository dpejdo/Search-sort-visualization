import { Grid } from '../../template/grid/grid';
import { binarySearch } from '../../../utilites/search/binarySearchUtl';
const BinarySearchPage = () => {
  return <Grid func={binarySearch} label={'Binary search'} />;
};
export default BinarySearchPage;
