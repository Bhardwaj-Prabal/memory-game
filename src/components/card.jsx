import React, { useState, useEffect } from "react";
import './Cards.css';

function Card({ id, onClick }) {
    const [pokemonImage, setPokemonImage] = useState(null);
    const [pokemonName, setPokemonName] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();
                // Ensure that data.sprites.other.dream_world.front_default exists before accessing it
                if (data.sprites.other?.dream_world?.front_default) {
                    setPokemonImage(data.sprites.other.dream_world.front_default);
                }
                setPokemonName(data.name);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData(); // Fetch data for each card
    }, [id]);

    return (
        <div className="Cards" onClick={onClick}>
            <div className="pokeImg">
                <img src={pokemonImage} alt={pokemonName} />
            </div>
            <div className="PokemonName">
                {pokemonName}
            </div>
        </div>
    );
}

export default Card;
