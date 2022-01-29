import SelectionSortPage from '../selectionSort';
import { templateTest } from './template';
import '@testing-library/jest-dom/extend-expect';

test('Insertion-sort', async () => {
  return await templateTest(SelectionSortPage, 6000);
}, 7000);
