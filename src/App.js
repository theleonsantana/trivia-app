import React, { useState } from 'react';
import StartGame from './components/StartGame';
import './scss/App.scss';

function App() {
	const [state, setState] = useState({
		player: '',
		counter: null,
	});

	const handleSubmit = (player) => {
		setState({ ...state, player: player });
	};

	return (
		<div className="App">
			<StartGame player={state.player} onChange={handleSubmit} />
		</div>
	);
}

export default App;
