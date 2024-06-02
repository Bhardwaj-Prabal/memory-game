import React, { useState, useEffect } from "react";
import Card from "../components/card";
import { createUniqueRandomArray, shuffleArray } from "../components/RandomArray";
import './GameBoard.css';

function GameBoard({ currentScore, setScore, bestScore, setBestScore }) {
    const initialArr = createUniqueRandomArray(10, 1, 100);

    const [prevOrder, setOrder] = useState(initialArr);
    const [isClicked, setClicked] = useState([]);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        // Load the audio when the component mounts
        const audioInstance = new Audio('/pikachu.mp3');
        audioInstance.onloadeddata = () => {
            setAudio(audioInstance);
        };
        audioInstance.onerror = (e) => {
            console.error("Error loading audio: ", e);
        };
    }, []);

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

        if (audio) {
            audio.play().catch(error => console.error("Audio play failed: ", error));
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

