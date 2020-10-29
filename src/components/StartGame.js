import React, { useState } from 'react';

const StartGame = ({ player, onChange }) => {
	// const [name, setName] = useState('');

	const handleChange = (e) => {
		onChange(e.target.value);
	};

	return (
		<div>
			<h2>Welcome to Tandem for 400!</h2>
			<p>Please provide your name:</p>
			<form action="" onSubmit={(e) => e.preventDefault()}>
				<input
					value={player}
					onChange={handleChange}
					placeholder="First name"
					type="text"
					name="firstName"
					required
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default StartGame;
