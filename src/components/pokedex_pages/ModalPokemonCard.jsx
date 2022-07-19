import React from 'react';
import Pokemon from "./PokemonCard"

const pokemon = (pokemons) => {
    pokemons.map((Pokemon, idx) => {
        return
    })
}
const ModalPokemonCard = ({ children }) => {

//     {pokemons.map((pokemon, idx)=>{
//         return <Pokemon pokemon={pokemon} key={pokemon.name} />;
// })}
    return (

        <div data-poke-card className="poke-card">
        <div data-poke-name className="poke-name">{pokemon.name}</div>
            <div data-poke-img-container className="img-container">
                <img data-poke-img className="poke-img" src="../imgs/pngwing.com.png" alt="pokemon"/>
            </div>
            <div data-poke-id className="poke-id"></div>
            <div data-poke-types className="poke-types"></div>
    </div>
    )
}

export default ModalPokemonCard;