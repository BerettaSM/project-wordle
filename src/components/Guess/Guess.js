import React from 'react';

import { range } from '../../utils';

function Guess({ guess }) {
    return (
        <p className="guess">
            {range(5).map((i) => {
                const letter = guess ? guess.result[i].letter : '';
                const statusClass = guess ? guess.result[i].status : '';
                const key = guess ? guess.result[i].id : crypto.randomUUID();
                const className = `cell ${statusClass}`;
                return (
                    <span className={className} key={key} id={key}>
                        {letter}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
