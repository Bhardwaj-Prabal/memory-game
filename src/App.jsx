import React, { useState } from 'react';
import GameBoard from './page/GameBoard';
import Top from './Layouts/top';
import './App.css';

function App() {
    const [currentScore, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (

        <> 
        <Top 
            currentScore={currentScore}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
        />
        <GameBoard 
            currentScore={currentScore}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
        />
        
        </>
    );
}

export default App;
