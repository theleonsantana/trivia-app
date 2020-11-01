import React, { useState } from 'react';

const Quiz = ({ question, options, check, select, selection, correct }) => {
	const [activeItem, setActiveItem] = useState(-1);
	const [submit, setSubmit] = useState(null);

	const handleSelection = (e, i) => {
		select(e.target.value);
		setActiveItem(i);
	};

	const handleCheck = (score) => {
		if (selection === correct) {
			setSubmit(true);
			check(score++);
		} else {
			setSubmit(false);
		}
	};

	return (
		<div>
			<div>
				<h3>{question}</h3>
				{options.map((item, i) => (
					<button
						onClick={(e) => handleSelection(e, i)}
						key={i}
						value={item}
						className={activeItem === i ? 'active' : 'inactive'}
					>
						{item}
					</button>
				))}
			</div>
			{submit === true ? (
				<h3>Correct :D</h3>
			) : submit == null ? (
				<h3>Check your answer</h3>
			) : (
				<div>
					<h3>Incorrect :(</h3>
					<p>
						the correct answer is: <br />"{correct}"
					</p>
				</div>
			)}
			<button onClick={handleCheck}>Check Answer</button>
		</div>
	);
};

export default Quiz;
