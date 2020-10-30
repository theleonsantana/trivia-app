import React, { useState } from 'react';

const Quiz = ({ question, options, check, select }) => {
	// const [selected, setSelected] = useState(false);

	const handleSelection = (e) => {
		select(e.target.value);
		e.target.className = '';
		e.target.className = 'selected';
	};

	const handleCheck = () => {
		console.log('checking response');
	};

	return (
		<div>
			<div>
				<h3>{question}</h3>
				{options.map((item, i) => (
					<button onClick={handleSelection} key={i} value={item}>
						{item}
					</button>
				))}
			</div>
			<button onClick={handleCheck}>Check Answer</button>
		</div>
	);
};

export default Quiz;
