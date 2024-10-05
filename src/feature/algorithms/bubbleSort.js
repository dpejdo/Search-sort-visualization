import { compare, swap } from '../../utils';

export function* bubbleSort(from, to) {
	let swapped;
	do {
		swapped = false;
		to -= 1;
		for (let j = from; j < to; j++) {
			if ((yield compare(j, j + 1)) > 0) {
				yield swap(j, j + 1);
				swapped = true;
			}
		}
	} while (swapped);
}
