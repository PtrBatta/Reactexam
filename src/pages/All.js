import {useState, useEffect} from 'react'
import Pokemon from '../components/Pokemon'
import React from 'react'
import './All.css'


function Allpokemons() {

  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(data => setPokemons(data.results))
        .catch(err => console.log(err))
  }, [])

  return (
    <div >
        <h1>React Router Vizsga - All Pokémons</h1>
        <div className='all-container'>
        {
            pokemons.map((c, idx) => {

                return <Pokemon key={idx} name={c.name} url={c.url} />
            })
        }
        </div>
    </div>
  )
}

export default Allpokemons;