import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo_Navbar.svg";
import "../css/NavbarMenu.css";

const pages = [
  <Link to="/" className="inicio">
    Pokefans
  </Link>,
  <Link to="/Pokemon2" className="pokedex">
    Pokédex
  </Link>,
  <Link to="/Items" className="objetos">
    Objetos
  </Link>,
  <Link to="/Galeria" className="galeria">
    Galería
  </Link>,
];
const settings = ["Perfil", "Cuenta", "Tablero", "Salir"];

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        {pages.map((page) => (
          <li>{page}</li>
        ))}
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <box-icon name="x" size='md'></box-icon>
        ) : (
          <box-icon name="menu" size='md'></box-icon>
        )}
      </button>
    </nav>
  );
};
export default Navbar;
