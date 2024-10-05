export function* mergeSort(from, to) {
	if (to - from <= 1) {
		return;
	}

	const mid = Math.floor((from + to) / 2);

	yield* mergeSort(from, mid);

	yield* mergeSort(mid, to);

	yield* merge(from, mid, to);
}

function* merge(from, mid, to) {
	let left = from;
	let right = mid;
	let tempArray = [];

	while (left < mid && right < to) {
		if ((yield ['compare', left, right]) <= 0) {
			tempArray.push(yield ['read', left]);
			left++;
		} else {
			tempArray.push(yield ['read', right]);
			right++;
		}
	}

	while (left < mid) {
		tempArray.push(yield ['read', left]);
		left++;
	}

	while (right < to) {
		tempArray.push(yield ['read', right]);
		right++;
	}

	for (let i = 0; i < tempArray.length; i++) {
		yield ['write', from + i, tempArray[i]];
	}
}
