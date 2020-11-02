import React from 'react';

const StartGame = ({ player, onChange, onSubmit }) => {
	const handleChange = (e) => {
		onChange(e.target.value);
	};

	const handleSubmit = (e) => {
		onSubmit(e.preventDefault());
	};

	return (
		<div>
			<h2>Welcome to Tandem for 400!</h2>
			<p>10 questions per round</p>
			<p>Results will be shown at the end of each round</p>
			<p>Please provide your name:</p>
			<form action="" onSubmit={handleSubmit}>
				<input
					value={player}
					onChange={handleChange}
					placeholder="Player Name"
					type="text"
					name="player-name"
					required
				/>
				<button style={{ marginLeft: 20 }} type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default StartGame;
