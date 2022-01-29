import BubbleSortPage from '../bubbleSort';
import { templateTest } from './template';
import '@testing-library/jest-dom/extend-expect';

test('Bubble-sort', async () => {
  return await templateTest(BubbleSortPage, 25000);
}, 30000);
