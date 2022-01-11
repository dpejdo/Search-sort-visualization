import { Grid } from '../template/grid/grid';
import { linearSearch } from '../../utilites/search/linearSearchUtl';
const linearSearchPage = () => {
  return <Grid func={linearSearch} label={'Linear search'} />;
};
export default linearSearchPage;
