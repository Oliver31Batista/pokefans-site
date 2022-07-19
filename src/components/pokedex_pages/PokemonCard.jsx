import React, { useContext, useState } from "react";
import FavoriteContext from "../../context/favoritesContext"
import "../css/Pokemon.css"
import expandArrows from "../imgs/expandArrows.svg"
import { useModal } from "../hooks/useModal"
import Modal from "./Modal"
import ModalPokemonCard from "./ModalPokemonCard";

const Pokemon = ({ pokemon }) => {
  const [isOpenModalPokemon, openModalPokemon, closeModalPokemon] =
    useModal(false);
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
  const typeColors = {
    electric: "#FFD700",
    normal: "#B09398",
    fire: "#FF675C",
    water: "#0596C7",
    ice: "#AFEAFD",
    rock: "#999799",
    flying: "#7AE7C7",
    grass: "#4A9681",
    psychic: "#FFC6D9",
    ghost: "#561D25",
    bug: "#A2FAA3",
    poison: "#795663",
    ground: "#D2B074",
    dragon: "#DA627D",
    steel: "#1D8A99",
    fighting: "#2F2F2F",
    default: "#2A1A1F",
  };

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  const [isFlipped, setIsFlipped] = useState(true);

  const handlerClick = () => {
    setIsFlipped(isFlipped ? false : true);
    console.log("flip", isFlipped);
  };

  return (
    <>
      <div className="pokemon-card">
        <div className="pokemon-img">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="card-body">
          <div className="card-top">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.id}</div>
            <div onClick={openModalPokemon}>
              <img src={expandArrows} alt="expand arrows" />
            </div>
            <Modal isOpen={isOpenModalPokemon} closeModal={closeModalPokemon}>
              <ModalPokemonCard/>
            </Modal>
          </div>
          <div className="card-bottom">
            <div className="pokemon-type">
              {pokemon.types.map((type, idx) => {
                return (
                  <div key={idx} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <button onClick={clickHeart}>
              <div className="favorite-pokemons">{heart}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
