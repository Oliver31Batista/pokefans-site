import React from 'react';
import fireTypes from '../imgs/fireTypes.jpg';
import grassTypes from '../imgs/grassTypes.jpg';
import waterTypes from '../imgs/waterTypes.jpg';
import electricTypes from '../imgs/electricTypes.jpg';
import darkTypes from '../imgs/darkTypes.jpg';

const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={fireTypes} className="d-block w-700" alt="Pokemons de tipo fuego"/>
    </div>
    <div className="carousel-item">
      <img src={grassTypes} className="d-block w-700" alt="Pokemons de tipo hierba"/>
    </div>
    <div className="carousel-item">
      <img src={waterTypes} className="d-block w-700" alt="Pokemons de tipo agua"/>
    </div>
    <div className="carousel-item active">
      <img src={electricTypes} className="d-block w-700" alt="Pokemons de tipo electrico"/>
    </div>
    <div className="carousel-item">
      <img src={darkTypes} className="d-block w-700" alt="Pokemons de tipo oscuro"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel;