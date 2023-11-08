import React from 'react';

function RestartButton({ children, ...delegated }) {
    return (
        <button className="restart-button" {...delegated}>
            <span className="restart-button-inner-wrapper">{children}</span>
        </button>
    );
}

export default RestartButton;
