function compare(a, b) {
	return ['compare', a, b];
}

function swap(a, b) {
	return ['swap', a, b];
}

function makeArray(length) {
	const array = [];
	for (let i = 0; i < length; i++) {
		array.push(i);
	}
	array.sort(() => (Math.random() < 0.5 ? 1 : -1));
	array.sort(() => (Math.random() < 0.5 ? 1 : -1));
	return array;
}

export { makeArray, swap, compare };
