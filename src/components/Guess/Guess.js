import React from 'react';

import { range } from '../../utils';

function Guess({ guess }) {
    return (
        <p className="guess">
            {range(5).map((i) => {
                const letter = guess ? guess.result[i].letter : '';
                const key = guess ? guess.result[i].id : crypto.randomUUID();
                const statusClassName = guess ? guess.result[i].status : '';
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
