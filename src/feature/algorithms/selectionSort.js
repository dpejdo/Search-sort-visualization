import { compare, swap } from '../../utils';

export function* selectionSort(from, to) {
	for (let i = from; i < to; i++) {
		let min = i;
		for (let j = i + 1; j < to; j++) {
			if ((yield compare(min, j)) > 0) {
				min = j;
			}
		}
		if (min !== i) {
			yield swap(i, min);
		}
	}
}
