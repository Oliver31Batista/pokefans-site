import React from "react";
import "../css/Inicio.css"
import pokimg1 from "../imgs/pokimg1.webp"
import pokimg2 from "../imgs/pokimg2.jpg"
import pokimg3 from "../imgs/pokimg3.jpg"
import backgroundImg1 from "../imgs/backgroundImg1.svg"
import backgroundImg2 from "../imgs/backgroundImg2.svg"

const inicio = () => {

  const mockImagenes = [
    pokimg1,
    pokimg2,
    pokimg3
  ]

  const containerStyle1 = {
    backgroundImage:
      `url(${backgroundImg1})`,
    width: "100%",
    height: "100vh",
  };

  const containerStyle2 = {
    backgroundImage:
      `url(${backgroundImg2})`,
    width: "100%",
    height: "100vh",
  };

  return (
    <>
    <div className="grid-block" style={containerStyle1}>
      {/* <Slider imagenes={mockImagenes}/> */}
      <div className="titleFirstPage">
        <h1>¿Qué son los <b>Pokémones</b>?</h1>
      </div>
      <div className="paragraph">
        <p>
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
      </div>
    </div>
    <div  style={containerStyle2}>
        {/* <Slider imagenes={mockImagenes}/> */}
      <div className="titleFirtsPage"></div>
      </div>
    </>

     
      
           
        // <div className="iframe-container">
        // <iframe
        //   src="https://www.youtube.com/embed/Rsv2VkoIpk0?start=6"
        //   title="YouTube video player"
        //   frameBorder="0"
        //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //   allowFullScreen
        // ></iframe> 
        // </div>



  );
};

export default inicio;
