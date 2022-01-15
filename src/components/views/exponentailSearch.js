import { Grid } from '../template/grid/grid';
import { exponentialSearch } from '../../utilites/search/exponentialSearchUtl';
const ExponentialSearchPage = () => {
  return <Grid func={exponentialSearch} label={'Exponential search'} />;
};
export default ExponentialSearchPage;
