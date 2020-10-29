import React, { useState } from 'react';
import Quiz from './components/Quiz';
import StartGame from './components/StartGame';
import './scss/App.scss';

function App() {
	const [state, setState] = useState({
		player: '',
		counter: null,
		begin: false,
	});

	const handleChange = (player) => {
		setState({ ...state, player: player });
	};

	const startTrivia = () => {
		setState({ ...state, begin: true });
	};

	return (
		<div className="App">
			{state.begin ? (
				<Quiz />
			) : (
				<StartGame
					player={state.player}
					onChange={handleChange}
					onSubmit={startTrivia}
				/>
			)}
		</div>
	);
}

export default App;
