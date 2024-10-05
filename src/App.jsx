import React, { useState, useEffect } from 'react';
import { makeArray } from './utils';
import { algorithms } from './feature/algorithms';
import { useSortingVisualizer } from './feature/hooks/useSortingVisualizer';

const BAR_WIDTH = 12;

const App = () => {
	const [baseArray, setArray] = useState(makeArray(40));
	const [algorithm, setAlgorithm] = useState(() => algorithms.quickSort);
	const { displayedArray, done, step, reset, barEffects, stats } = useSortingVisualizer(
		baseArray,
		algorithm
	);
	const [playing, setPlay] = useState(false);

	useEffect(() => {
		if (!done && playing) {
			let taskId = window.setInterval(() => {
				step();
			}, 1000 / 30);
			return () => window.clearInterval(taskId);
		}
	}, [done, step, playing]);

	const handleNewArray = () => {
		setArray(makeArray(40));
		setPlay(false);
	};

	return (
		<div className="container">
			<h1 className="title">Sorting Visualizer</h1>
			<div className="visualizer">
				<div
					className="array-container"
					style={{ width: `${displayedArray.length * BAR_WIDTH}px` }}
				>
					{displayedArray.map((value, index) => (
						<div
							key={index}
							className={`bar ${barEffects[index] || ''}`}
							style={{
								left: `${index * BAR_WIDTH}px`,
								width: `${BAR_WIDTH - 1}px`,
								height: `${((value + 1) / displayedArray.length) * 100}%`,
							}}
							title={`Value: ${value}`}
						>
							<div className="bar-label">
								{!done && barEffects[index] === 'compare' && 'Comparing'}
								{!done && barEffects[index] === 'swap' && 'Swapping'}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="controls">
				<div className="stats">
					<p>Comparisons: {stats.compare}</p>
					<p>Swaps: {stats.swap}</p>
				</div>
				<div className="buttons">
					<button onClick={handleNewArray}>New Array</button>
					<button onClick={step}>Step</button>
					<button onClick={reset}>Reset</button>
					<button onClick={() => setPlay((playing) => !playing)}>
						{playing ? 'Pause' : 'Play'}
					</button>
				</div>
				<div className="algorithms">
					<h3>Select Algorithm:</h3>
					{Object.entries(algorithms).map(([name, generator]) => (
						<label key={name} className="algorithm-option">
							<input
								type="radio"
								checked={algorithm === generator}
								onChange={() => setAlgorithm(() => generator)}
							/>
							{name}
						</label>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
