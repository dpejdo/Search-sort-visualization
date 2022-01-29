import MergeSortPage from '../mergeSort';
import { templateTest } from './template';
import '@testing-library/jest-dom/extend-expect';

test('merge-sort', async () => {
  return await templateTest(MergeSortPage, 14000);
}, 15000);
