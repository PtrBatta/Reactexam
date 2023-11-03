import React from 'react'
import {useState} from 'react'
import Pokemon from '../components/Pokemon'
import './Search.css'

function Search() {

  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");

  function getPokemon(){

    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(res => res.json())
    .then(data => setPokemon(data))
    .catch(err => console.log(err))

    setSearch("");
  }
  
  
  return (
    <div>
        <header>
            <h1>React Router Vizsga - Pokémon keresése</h1>
            <input type="text" placeholder="Írd be a Pokémon nevét..." value={search} onChange={(e) => {

                setSearch(e.target.value)
            }} />
            <button onClick={getPokemon}>Keresés</button>
        </header>

        <div className='pokemon-container'>
            
                {
                    pokemon && //if(pokemon){ <Pokemon name={pokemon.name} url={`https://pokeapi.co/api/v2/pokemon/${search}`} img={pokemon.sprites.other.home.front_default}  />}
                    <Pokemon name={pokemon.name} url={`https://pokeapi.co/api/v2/pokemon/${search}`} img={pokemon.sprites.other.home.front_default}  />
                }
            
        </div>
    </div>
  )
}

export default Search;