import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import haunter from "../imgs/haunter.svg";
import articuno from "../imgs/articuno.svg";
import moltres from "../imgs/moltres.svg";
import zapdos from "../imgs/zapdos.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Sobre nosotros</h4>
            <ul>
              <li>
                <p>
                  Pokefans es una página dedicada a compartir información para
                  dar a conocer el fascinante mundo de los pokémons.
                </p>
              </li>
              <li>
                <img src={haunter} alt="haunter" />
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Páginas</h4>
            <ul>
              <li>
                <Link to="/"> Inicio</Link>
              </li>
              <li>
                <Link to="/Pokemon2"> Pokédex</Link>
              </li>
              <li>
                <Link to="/Items"> Objetos</Link>
              </li>
              <li>
                <Link to="/Galeria"> Galería</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contáctame</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/oliver.mhbatista/" target="_blank">
                <img src={articuno} alt="Facebook" />
              </a>
              <a href="mailto: ohenriquez@intellisys.com.do">
                <img src={moltres} alt="Gmail" />
              </a>
              <a href="https://github.com/Oliver31Batista" target="_blank">
                <img src={zapdos} alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
