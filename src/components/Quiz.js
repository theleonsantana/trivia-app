import React, { useState } from 'react';

const Quiz = ({ question, options, check, select }) => {
	const [activeItem, setActiveItem] = useState(-1);

	const handleSelection = (e, i) => {
		select(e.target.value);
		setActiveItem(i);
		// console.log(e);
	};

	const handleCheck = () => {
		console.log('checking response');
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
			<button onClick={handleCheck}>Check Answer</button>
		</div>
	);
};

export default Quiz;
