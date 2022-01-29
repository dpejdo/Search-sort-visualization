import { templateTest } from './template';
import '@testing-library/jest-dom/extend-expect';
import QuickSortPage from '../quickSort';
test('Quick-sort', async () => {
  return await templateTest(QuickSortPage, 10000);
}, 11000);
