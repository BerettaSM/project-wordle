import React from 'react';

function GuessInput({ onSubmit }) {

    const [inputValue, setInputValue] = React.useState('');

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(inputValue);
        clearInput();
    }

    function clearInput() {
        setInputValue('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={submitHandler}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                pattern="[A-Z]{5}"
                value={inputValue}
                onChange={event => {
                    setInputValue(event.target.value.toUpperCase());
                }}
            />
        </form>
    );
}

export default GuessInput;
