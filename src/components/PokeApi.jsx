import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DisplayPokemon from "./DisplayPokemon";

const PokeApi = () => {
  const [responseData, setResponseData] = useState([]);
  const [showPokemon, setShowPokemon] = useState(false);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => {
      setResponseData(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <div>
      <button onClick={() => { setShowPokemon(true) }}>Fetch Pokemon</button>
      { showPokemon ? <DisplayPokemon pokemonList={ responseData } /> : undefined }
    </div>
  )
}

export default PokeApi;
