import React, { useState } from 'react';

const StartGame = () => {
	const [name, setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h2>Welcome to Tandem for 400!</h2>
			<p>Please provide your name:</p>
			<form action="" onSubmit={handleSubmit}>
				<input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
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
