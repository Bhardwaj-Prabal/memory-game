import React, { useState, useEffect } from "react";
import './Cards.css';

function Card({ id, onClick }) {
    const [pokemonImage, setPokemonImage] = useState(null);
    const [pokemonName, setPokemonName] = useState(null);
    const [pokemonSound, setPokemonSound] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();
                if (data.sprites.other?.dream_world?.front_default) {
                    setPokemonImage(data.sprites.other.dream_world.front_default);
                }
                setPokemonName(data.name);

                const soundUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
                setPokemonSound(soundUrl);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [id]);

    function handleClick() {
        if (pokemonSound) {
            console.log(`Playing sound: ${pokemonSound}`);
            const audio = new Audio(pokemonSound);
            audio.play().catch(error => console.error("Audio play failed: ", error));
        }
        onClick();
    }

    return (
        <div className="Cards" onClick={handleClick}>
            <div className="pokeImg">
                <img src={pokemonImage} alt={pokemonName} />
            </div>
            <div className="PokemonName">
                {pokemonName}
            </div>
            <audio id={`audio-${id}`} src={pokemonSound} />
        </div>
    );
}

export default Card;

