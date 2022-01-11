import { Grid } from '../template/grid/grid';
import { binarySearch } from '../../utilites/search/binarySearchUtl';
const linearSearchPage = () => {
  return <Grid func={binarySearch} label={'Binary search'} />;
};
export default linearSearchPage;
