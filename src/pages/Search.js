import React from "react";
import { useState } from "react";

import "./Search.css";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function getPokemon() {
    navigate("/search/" + search);
  }

  return (
    <div>
      <header>
        <h1>React Router Vizsga - Pokémon keresése</h1>
        <input
          type="text"
          placeholder="Írd be a Pokémon nevét..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={getPokemon}>Keresés</button>
      </header>
    </div>
  );
}

export default Search;
