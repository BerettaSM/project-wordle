import React from 'react';

import { range } from '../../utils';

function Guess({ children }) {
    return (
        <p className="guess">
            {range(5).map((i) => (
                <span className="cell" key={crypto.randomUUID()}>
                    {children ? children[i] : ''}
                </span>
            ))}
        </p>
    );
}

export default Guess;
