
import React from 'react';
import './score.css';

function Score({ currentScore, bestScore }) {
    return (
        <div className='header'>
            <div id='title'>
                <h1>Pokemon Memory Game</h1>
            </div>

            <div id='instructions'>
                Instructions: Get points by clicking on a pokemon but don't click on any more than once!
            </div>

            <div id='currentScore'>
                <div>Score: {currentScore}</div>
            </div>

            <div id='bestScore'>Best Score: {bestScore}</div>
        </div>
    );
}

export default Score;
