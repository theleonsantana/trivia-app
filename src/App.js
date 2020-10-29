import React, { useState } from 'react';
import StartGame from './components/StartGame';
import './scss/App.scss';

function App() {
	const [state, setState] = useState({
		player: '',
		counter: null,
	});

	const handleChange = (player) => {
		setState({ ...state, player: player });
	};

	const startTrivia = () => {
		console.log('Begin');
	};

	return (
		<div className="App">
			<StartGame
				player={state.player}
				onChange={handleChange}
				onSubmit={startTrivia}
			/>
		</div>
	);
}

export default App;
