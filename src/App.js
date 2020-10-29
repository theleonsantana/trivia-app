import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quiz from './components/Quiz';
import StartGame from './components/StartGame';
import './scss/App.scss';

import triviaData from './data/Apprentice_TandemFor400_Data.json';

function App() {
	const [state, setState] = useState({
		player: '',
		counter: null,
		begin: false,
	});
	const [question, setQuestion] = useState('');
	const [options, setOptions] = useState({ options: [] });

	const handleChange = (player) => {
		setState({ ...state, player: player });
	};

	const startTrivia = () => {
		getQuestion();
		setState({ ...state, begin: true });
	};

	const getQuestion = () => {
		// create a copy of the array data
		let tempArray = triviaData;
		// crate a random number by the length of the array
		let randomQuestion = Math.floor(Math.random() * tempArray.length);

		setQuestion(tempArray[randomQuestion].question);
		tempArray.splice(randomQuestion, 1);

		console.log(tempArray);
		/**
		 * I need to iterate through the data
		 * I need to assign question to state
		 * I need to removed assigned questions from the current array
		 *
		 */
	};

	// console.log(getQuestion());

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
