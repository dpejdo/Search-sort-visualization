import { compare, swap } from '../../utils';
export function* insertionSort(from, to) {
	for (let i = from; i < to; i++) {
		let r = i + 1,
			l = i;

		while ((yield compare(l, r)) > 0 && l >= 0) {
			yield swap(l, r);
			r--;
			l--;
		}
	}
}
