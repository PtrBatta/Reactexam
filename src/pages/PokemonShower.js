import React, { useEffect } from "react";
import { useState } from "react";
import Pokemon from "../components/Pokemon";
import "./Search.css";
import { useParams } from "react-router-dom";

function PokemonShower() {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  }, [pokemonName]);

  return (
    <div>
      <div className="pokemon-container">
        {pokemon && ( //if(pokemon){ <Pokemon name={pokemon.name} url={`https://pokeapi.co/api/v2/pokemon/${search}`} img={pokemon.sprites.other.home.front_default}  />}
          <Pokemon
            name={pokemon.name}
            url={`https://pokeapi.co/api/v2/pokemon/${pokemonName}`}
            img={pokemon.sprites.other.home.front_default}
          />
        )}
      </div>
    </div>
  );
}

export default PokemonShower;
