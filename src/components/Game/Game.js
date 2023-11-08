import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import { checkGuess } from '../../game-helpers';

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
                result: checkGuess(guess, answer).map((o) => ({
                    ...o,
                    id: crypto.randomUUID(),
                })),
            },
        ]);
    }

    return (
        <>
            <GuessResults guesses={guesses} />
            <GuessInput onSubmit={addGuess} />
        </>
    );
}

export default Game;
