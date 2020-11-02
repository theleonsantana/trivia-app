import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Score from './components/Score';
import StartGame from './components/StartGame';
import './scss/App.scss';

import triviaData from './data/Apprentice_TandemFor400_Data.json';

function App() {
	const [state, setState] = useState({
		player: '',
		counter: 9,
		begin: false,
		selection: '',
		score: 0,
		delayTime: 2000,
	});
	const [question, setQuestion] = useState({
		question: '',
		options: {},
		correct: '',
	});

	const initialQuestion = {
		question: '',
		options: {},
		correct: '',
	};

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
		// console.log(shuffledTrivia);
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

	const handleSelection = (selection) => {
		setState({ ...state, selection: selection });
	};

	const handleCheck = () => {
		if (state.counter !== 11) {
			setTimeout(() => {
				getQuestion();
				if (state.selection === question.correct) {
					setState({ ...state, score: state.score++ });
				}

				setState({
					...state,
					counter: state.counter++,
					selection: '',
				});
			}, state.delayTime);
		} else {
			setQuestion({ ...initialQuestion });
			setState({ ...state, begin: false });
		}
	};

	return (
		<div className="App">
			{state.counter === 11 ? (
				<Score score={state.score} player={state.player} />
			) : state.begin ? (
				<Quiz
					question={question.question}
					options={question.options}
					check={handleCheck}
					select={handleSelection}
					selection={state.selection}
					correct={question.correct}
					player={state.player}
					counter={state.counter}
					delay={state.delayTime}
				/>
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
