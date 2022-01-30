import { Grid } from '../../template/grid/grid';
import { linearSearch } from '../../../utilites/search';
export const LinearSearchPage = () => {
  return <Grid func={linearSearch} label={'Linear search'} />;
};
