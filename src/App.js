import React, { useState } from 'react';
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
	const [question, setQuestion] = useState({
		question: '',
		options: {},
		correct: '',
	});
	// const [options, setOptions] = useState({ answers: [] });

	const handleChange = (player) => {
		setState({ ...state, player: player });
	};

	const startTrivia = () => {
		getQuestion();
		setState({ ...state, begin: true });
	};

	const getQuestion = () => {
		// randomize the questions
		let shuffledTrivia = shuffle(triviaData);
		let allOptions = [];

		allOptions.push(shuffledTrivia[0].correct);
		let incorrect = shuffledTrivia[0].incorrect;
		for (let i = 0; i < incorrect.length; i++) {
			allOptions.push(incorrect[i]);
		}

		setState({ ...state, counter: state.counter++ });
		setQuestion({
			...question,
			question: shuffledTrivia[0].question,
			options: shuffle(allOptions),
			correct: shuffledTrivia[0].correct,
		});

		shuffledTrivia.splice(0, 1);
		console.log(shuffledTrivia);
	};

	const shuffle = (sourceArray) => {
		for (var i = 0; i < sourceArray.length - 1; i++) {
			var j = i + Math.floor(Math.random() * (sourceArray.length - i));
			var temp = sourceArray[j];
			sourceArray[j] = sourceArray[i];
			sourceArray[i] = temp;
		}
		return sourceArray;
	};

	return (
		<div className="App">
			{state.begin ? (
				<Quiz question={question.question} options={question.options} />
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
