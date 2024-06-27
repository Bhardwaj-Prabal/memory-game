import React, { useState, useEffect } from "react";
import Card from "../components/card";
import { createUniqueRandomArray, shuffleArray } from "../components/RandomArray";
import './GameBoard.css';

function GameBoard({ currentScore, setScore, bestScore, setBestScore }) {
    const initialArr = createUniqueRandomArray(10, 1, 100);

    const [prevOrder, setOrder] = useState(initialArr);
    const [isClicked, setClicked] = useState([]);

    function handleClick(id) {
        if (isClicked.includes(id)) {
            setOrder(shuffleArray([...prevOrder]));
            setClicked([]);
            if (currentScore > bestScore) {
                setBestScore(currentScore);
            }
            setScore(0);
        } else {
            setClicked([...isClicked, id]);
            setScore(currentScore + 1);
            setOrder(shuffleArray([...prevOrder])); // Shuffle the array and update the state
        }
    }

    return (
        <div className="GameBoard">
            {prevOrder.map((value) => (
                <Card
                    key={value}
                    id={value}
                    onClick={() => handleClick(value)}
                />
            ))}
        </div>
    );
}

export default GameBoard;


