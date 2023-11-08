import React from 'react';

import { range } from '../../utils';

function Guess({ guess }) {
    return (
        <p className="guess">
            {range(5).map((i) => {
                const letter = guess ? guess.results[i].letter : '';
                const key = guess ? guess.results[i].id : crypto.randomUUID();
                const statusClassName = guess ? guess.results[i].status : '';
                const fullClassName = `cell ${statusClassName}`;
                return (
                    <span className={fullClassName} key={key}>
                        {letter}
                    </span>
                );
            })}
        </p>
    );
}

export default Guess;
