import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    function addGuess(guess) {
        setGuesses((prevGuesses) => [
            ...prevGuesses,
            {
                id: crypto.randomUUID(),
                result: checkGuess(guess, answer).map((o) => {
                    return {
                        ...o,
                        id: crypto.randomUUID(),
                    };
                }),
                isCorrect: guess === answer,
            },
        ]);
    }
    const lastGuess = guesses[guesses.length - 1];
    const isWinner = lastGuess && lastGuess.isCorrect;
    const isGameOver = guesses.length === NUM_OF_GUESSES_ALLOWED;

    return (
        <>
            <GuessResults guesses={guesses} />
            <GuessInput onSubmit={addGuess} disabled={isWinner || isGameOver} />
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
