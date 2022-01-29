import InsertionSortPage from '../insertionSort';
import { templateTest } from './template';
import '@testing-library/jest-dom/extend-expect';

test('insertion-sort', async () => {
  return await templateTest(InsertionSortPage, 14000);
}, 15000);
