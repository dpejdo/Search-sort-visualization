import { compare, swap } from '../../utils';

export function* quickSort(from, to) {
	if (to - from <= 1) {
		return;
	}

	const pivot = to - 1;

	let i = from;
	for (let j = from; j < to; j++) {
		if ((yield compare(j, pivot)) < 0) {
			yield swap(i, j);
			i++;
		}
	}

	yield swap(i, pivot);

	yield* quickSort(from, i);
	yield* quickSort(i + 1, to);
}
