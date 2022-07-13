import React, { useState, useEffect } from 'react'

import axios from 'axios';

const Pokemon = () => {

  const [pokemonName, setPokemonName] = useState('');
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState(
    {
      name: "", 
      species: "", 
      img: "", 
      hp: "",
      attack: "",
      type: "",
    }
  );

  // useEffect(()=>{
  //   obtenerDatos();
  // }, [])

  const obtenerDatos = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((respuesta) => {
      setPokemon({
        name: pokemonName, 
        species: respuesta.data.species.name, 
        img: respuesta.data.sprites.front_default, 
        hp: respuesta.data.stats[0].base_stat,
        attack: respuesta.stats[1].base_stat,
        type: respuesta.data.types[0].type.name, })
    });
    setPokemonChosen(true);
  }
  return (
    <div>
      <h1>Pokemons</h1>
      <input 
        type="text"
        onChange={(event) => {
          setPokemonName(event.target.value);
        }} />
        <button onClick={obtenerDatos}>Buscar</button>
        {/* {
          <ul>
            <li key="pokemon.name">{pokemon.name}</li>
          </ul>
        } */}
        <div className="pokemon">
          {!pokemonChosen ? (<h1>busca un pokemon</h1>) : (<h1>{pokemonName}</h1>)}
        </div>
    </div>
  )
}

export default Pokemon;