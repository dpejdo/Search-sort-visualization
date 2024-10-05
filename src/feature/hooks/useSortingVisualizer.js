import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

export function useSortingVisualizer(baseArray, algorithm) {
	const [resetCount, reset] = useReducer((state) => state + 1, 0);
	const [{ displayedArray, done, barEffects, stats }, setState] = useState({
		displayedArray: [],
		done: true,
		barEffects: {},
		stats: { compare: 0, swap: 0 },
	});
	const stepRef = useRef(() => {});

	useEffect(() => {
		let state = {
			displayedArray: baseArray,
			done: false,
			barEffects: {},
			stats: { compare: 0, swap: 0 },
		};
		setState(state);
		const generator = algorithm(0, state.displayedArray.length);
		let nextValue = 0;

		function doStep() {
			const action = generator.next(nextValue);
			if (action.done) {
				if (!state.done) {
					state = {
						...state,
						done: true,
						barEffects: {},
					};
					setState(state);
				}
			} else if (action.value[0] === 'compare') {
				const a = state.displayedArray[action.value[1]];
				const b = state.displayedArray[action.value[2]];
				if (a > b) {
					nextValue = 1;
				} else if (a < b) {
					nextValue = -1;
				} else {
					nextValue = 0;
				}
				state = {
					...state,
					barEffects: {
						[action.value[1]]: 'compare',
						[action.value[2]]: 'compare',
					},
					stats: {
						...state.stats,
						compare: state.stats.compare + 1,
					},
				};
				setState(state);
			} else if (action.value[0] === 'swap') {
				const workingArray = [...state.displayedArray];
				const tmp = workingArray[action.value[1]];
				workingArray[action.value[1]] = workingArray[action.value[2]];
				workingArray[action.value[2]] = tmp;
				state = {
					...state,
					displayedArray: workingArray,
					barEffects: {
						[action.value[1]]: 'swap',
						[action.value[2]]: 'swap',
					},
					stats: {
						...state.stats,
						swap: state.stats.swap + 1,
					},
				};
				setState(state);
			} else if (action.value[0] === 'read') {
				nextValue = state.displayedArray[action.value[1]];
				state = {
					...state,
					barEffects: {
						[action.value[1]]: 'read',
					},
					stats: {
						...state.stats,
						read: (state.stats.read || 0) + 1,
					},
				};
				setState(state);
			} else if (action.value[0] === 'write') {
				const workingArray = [...state.displayedArray];
				workingArray[action.value[1]] = action.value[2];
				state = {
					...state,
					displayedArray: workingArray,
					barEffects: {
						[action.value[1]]: 'write',
					},
					stats: {
						...state.stats,
						write: (state.stats.write || 0) + 1,
					},
				};
				setState(state);
			} else {
				throw new Error('Unknown action: ' + JSON.stringify(action.value));
			}
		}
		stepRef.current = doStep;
	}, [resetCount, baseArray, algorithm]);

	const step = useCallback(() => {
		stepRef.current();
	}, [stepRef]);

	return {
		displayedArray,
		done,
		barEffects,
		stats,
		step,
		reset,
	};
}
