import React from 'react';

const Score = ({ player, score }) => {
	return (
		<div>
			<h3>
				{player} got {score} questions right!
			</h3>
			<h4>To play again please refresh your browser.</h4>
		</div>
	);
};

export default Score;
