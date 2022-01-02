import react from 'react';
import { Grid } from '../template/grid';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('grid render with all elements', () => {
  const { getByTestId } = render(<Grid />);
  const grid = getByTestId('grid');
  expect(grid.id).toBe('grid');
});

test('get grid props', () => {
  let props = { value: '2', name: 'tri' };
  const { getByTestId } = render(<Grid props={props} />);
  const grid = getByTestId('grid');
  expect(grid).toHaveBeenCalledWith(props);
});
