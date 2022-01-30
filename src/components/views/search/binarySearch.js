import { Grid } from '../../template/grid/grid';
import { binarySearch } from '../../../utilites/search';
export const BinarySearchPage = () => {
  return <Grid func={binarySearch} label={'Binary search'} />;
};
