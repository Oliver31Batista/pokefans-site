import React from "react";
import { Link } from "react-router-dom";
import pokemonLogo from "../imgs/pokemonLogo.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-dark bg-dark navbar navbar-expand-lg "> {/*ver como manejar el dark*/}
        <div className="container-fluid">
          <Link to="/">
          <img src={pokemonLogo} width="90" alt="pokemon-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Pokemon2">
                  Pokemons
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Items">
                  Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Galeria">
                  Galeria
                </Link>
              </li>
          
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
