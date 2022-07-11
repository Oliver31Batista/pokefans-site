import React from "react";
import "../css/Inicio.css"
import Carousel from "../carousel/Carousel.jsx";

const inicio = () => {
  return (
    <div>
      <Carousel />
      <div className="container mb-5 ">
        <figure>
          <blockquote className="blockquote">
            <p className="text-center mt-5">
              Los Pokémon son una clase de criaturas inspiradas en animales
              reales, insectos, objetos, plantas o criaturas mitológicas con un
              sistema de evolución lamarckiano. Los jugadores toman el papel
              Entrenadores Pokémon y tienen tres objetivos generales: completar
              la Pokédex mediante la recopilación de todas las especies de
              Pokémon disponibles que se encuentran, entrenar un equipo de
              Pokémon poderosos de aquellos que han atrapado para competir
              contra otros entrenadores. El objetivo final del juego es llegar a
              ganar la Liga Pokémon y convertirse en el campeón regional. La
              temática de coleccionar, entrenar y luchar están presentes en casi
              todas las versiones de la franquicia Pokémon, incluidos los
              videojuegos, las series de anime y manga, y el juego de cartas
              coleccionables Pokémon.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">WIKIPEDIA</figcaption>
        </figure>

        <h2 className="bg-dark text-white mb-5 text-center">
          Primer opening de la serie de Pokemon
        </h2>
        <div class="iframe-container">
        <iframe
          src="https://www.youtube.com/embed/Rsv2VkoIpk0?start=6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> 
        </div>
      </div>
    </div>
  );
};

export default inicio;
