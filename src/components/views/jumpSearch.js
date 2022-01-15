import { Grid } from '../template/grid/grid';
import { jumpSearch } from '../../utilites/search/jumpSearchUtl';
const JumpSearchPage = () => {
  return <Grid func={jumpSearch} label={'Jump search'} />;
};
export default JumpSearchPage;
