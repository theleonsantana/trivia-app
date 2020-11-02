import React, { useState } from 'react';

const Quiz = ({
	question,
	options,
	select,
	selection,
	correct,
	player,
	counter,
	check,
	delay,
}) => {
	const [activeItem, setActiveItem] = useState(-1);
	const [submit, setSubmit] = useState(null);

	const handleSelection = (e, i) => {
		select(e.target.value);
		setActiveItem(i);
	};

	const ckeckAnswer = () => {
		if (selection === correct) {
			setSubmit(true);
			setTimeout(() => {
				setActiveItem(-1);
			}, delay);
			check();
		} else if (selection !== correct) {
			setSubmit(false);
			check();
			setActiveItem(-1);
		} else {
			check();
			setActiveItem(-1);
		}
		setTimeout(() => {
			setSubmit(null);
		}, delay);
	};

	return (
		<div>
			<div>
				<h4>Player: {player}</h4>
				<h4>Question: {counter} / 10</h4>
				<h2 style={{ fontWeight: 'bold' }}>{question}</h2>
				{options.map((item, i) => (
					<button
						onClick={(e) => handleSelection(e, i)}
						key={i}
						value={item}
						className={activeItem === i ? 'active options' : 'inactive options'}
					>
						{item}
					</button>
				))}
			</div>
			{submit === true ? (
				<h3 className="correct">Correct :D</h3>
			) : submit === null ? (
				<h3>Check your answer</h3>
			) : (
				<div>
					<h3 className="incorrect">Incorrect :(</h3>
					<p>
						the correct answer is: <br />"{correct}"
					</p>
				</div>
			)}
			<button onClick={ckeckAnswer} disabled={!selection ? true : false}>
				Check Answer
			</button>
		</div>
	);
};

export default Quiz;
