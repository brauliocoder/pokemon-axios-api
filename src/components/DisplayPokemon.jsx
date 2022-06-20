import React from 'react'

function DisplayPokemon(props) {
  return (
    <div>
      <ul>
        {props.pokemonList.map((pokemon, index) => {
          return(
            <li key={index}>{pokemon.name}</li>
          )}
        )}
      </ul>
    </div>
  )
}

export default DisplayPokemon