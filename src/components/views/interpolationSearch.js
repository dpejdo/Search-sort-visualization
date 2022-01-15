import { Grid } from '../template/grid/grid';
import { interpolationSearch } from '../../utilites/search/interpolationSearchUtl';
const linearSearchPage = () => {
  return <Grid func={interpolationSearch} label={'Interpolation search'} />;
};
export default linearSearchPage;
