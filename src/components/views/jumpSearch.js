import { Grid } from '../template/grid/grid';
import { jumpSearch } from '../../utilites/search/jumpSearchUtl';
const linearSearchPage = () => {
  return <Grid func={jumpSearch} label={'Jump search'} />;
};
export default linearSearchPage;
