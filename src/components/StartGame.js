import React from 'react';

const StartGame = ({ player, onChange, onSubmit }) => {
	// const [name, setName] = useState('');

	const handleChange = (e) => {
		onChange(e.target.value);
	};

	const handleSubmit = (e) => {
		onSubmit(e.preventDefault());
	};

	return (
		<div>
			<h2>Welcome to Tandem for 400!</h2>
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
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default StartGame;
