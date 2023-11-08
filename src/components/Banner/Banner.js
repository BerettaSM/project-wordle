import React from 'react';

function Banner({ isWinner, isGameOver, numOfGuesses, answer }) {
    let className, innerContent;

    if (isWinner) {
        className = 'happy banner';
        innerContent = (
            <p>
                <strong>Congratulations!</strong> Got it in{' '}
                <strong>{numOfGuesses} guesses</strong>.
            </p>
        );
    } else if (isGameOver) {
        className = 'sad banner';
        innerContent = (
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
        );
    } else {
        return null;
    }

    return <div className={className}>{innerContent}</div>;
}

export default Banner;
