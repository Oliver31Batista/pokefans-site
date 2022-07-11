import React from 'react';
import "../css/Carousel.css";
import kyogre from '../imgs/kyogre.png';
import pokimg1 from '../imgs/pokimg1.webp';
import pokimg2 from '../imgs/pokimg2.jpg';
import pokimg3 from '../imgs/pokimg3.jpg';
import pokimg4 from '../imgs/pokimg4.jpg';
import pokimg5 from '../imgs/pokimg5.jpg';


const Carousel = () => {
  return (
    <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={kyogre} className="d-block w-700" alt="Pokemons de tipo fuego" width="1280" height="720"/>
    </div>
    <div className="carousel-item">
      <img src={pokimg1} className="d-block w-700" alt="Pokemons de tipo hierba" width="1280" height="720"/>
    </div>
    <div className="carousel-item">
      <img src={pokimg2} className="d-block w-700" alt="Pokemons de tipo agua" width="1280" height="720"/>
    </div>
    <div className="carousel-item active">
      <img src={pokimg3} className="d-block w-700" alt="Pokemons de tipo electrico" width="1280" height="720"/>
    </div>
    <div className="carousel-item">
      <img src={pokimg4} className="d-block w-700" alt="Pokemons de tipo oscuro" width="1280" height="720"/>
    </div>
    <div className="carousel-item">
      <img src={pokimg5} className="d-block w-700" alt="Pokemons de tipo x" width="1280" height="720"/>
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