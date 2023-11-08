import React from 'react';

function VirtualKeyboard({ pressedKeys }) {
    const keys = React.useRef([
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ]);

    return (
        <div className="keyboard">
            {keys.current.map((rowOfKeys, index) => (
                <div className="keyboard-row" key={index}>
                    {rowOfKeys.map((keyboardKey) => (
                        <span key={keyboardKey} className={`keyboard-key ${pressedKeys[keyboardKey]}`}>
                            {keyboardKey}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default VirtualKeyboard;
