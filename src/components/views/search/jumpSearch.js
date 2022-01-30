import { Grid } from '../../template/grid/grid';
import { jumpSearch } from '../../../utilites/search';
export const JumpSearchPage = () => {
  return <Grid func={jumpSearch} label={'Jump search'} />;
};
