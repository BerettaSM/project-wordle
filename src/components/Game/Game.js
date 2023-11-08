import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import VirtualKeyboard from '../VirtualKeyboard/VirtualKeyboard';
import RestartButton from '../RestartButton/RestartButton';

function Game() {
    const [answer, setAnswer] = React.useState(() => {
        const newAnswer = sample(WORDS);
        console.info({ answer: newAnswer });
        return newAnswer;
    });
    const [guesses, setGuesses] = React.useState([]);
    const [pressedKeys, setPressedKeys] = React.useState({});

    function addGuess(userGuess) {
        const newGuess = {
            id: crypto.randomUUID(),
            results: checkGuess(userGuess, answer).map((o) => {
                return {
                    ...o,
                    id: crypto.randomUUID(),
                };
            }),
            isCorrect: userGuess === answer,
        };
        setGuesses((prevGuesses) => [...prevGuesses, newGuess]);
        updatePressedKeys(newGuess.results);
    }

    function updatePressedKeys(results) {
        const newPressedKeys = results.reduce(
            (obj, result) => ({
                ...obj,
                [result.letter]: result.status,
            }),
            {}
        );
        setPressedKeys((prevPressedKeys) => ({
            ...prevPressedKeys,
            ...newPressedKeys,
        }));
    }

    function restartGame(event) {
        const newAnswer = sample(WORDS);
        console.info({ answer: newAnswer });
        setAnswer(newAnswer);
        setGuesses([]);
        setPressedKeys({});
    }

    const lastGuess = guesses[guesses.length - 1];
    const isWinner = lastGuess && lastGuess.isCorrect;
    const isGameOver = guesses.length === NUM_OF_GUESSES_ALLOWED;

    return (
        <>
            {(isWinner || isGameOver) && (
                <RestartButton onClick={restartGame}>Play again!</RestartButton>
            )}
            <GuessResults guesses={guesses} />
            <GuessInput onSubmit={addGuess} disabled={isWinner || isGameOver} />
            <VirtualKeyboard pressedKeys={pressedKeys} />
            <Banner
                answer={answer}
                numOfGuesses={guesses.length}
                isWinner={isWinner}
                isGameOver={isGameOver}
            />
        </>
    );
}

export default Game;
