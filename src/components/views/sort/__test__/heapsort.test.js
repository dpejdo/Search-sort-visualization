import { templateTest } from './template';
import '@testing-library/jest-dom/extend-expect';
import HeapSortPage from '../heapSort';

test('Heap-sort', async () => {
  return await templateTest(HeapSortPage, 10000);
}, 11000);
