import React from 'react';

const Quiz = ({ question, options }) => {
	return (
		<div>
			<h3>{question}</h3>
			<ul>
				{options.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
			<button>Check Answer</button>
		</div>
	);
};

export default Quiz;
