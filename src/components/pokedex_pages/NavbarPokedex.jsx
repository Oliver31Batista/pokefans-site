import React, { useContext } from "react";
import pokemonLogo from '../imgs/pokemonLogo.png'
import '../css/NavbarPokedex.css'
import FavoriteContext from "../../context/favoritesContext"


const Navbar =  () => {

    const { favoritePokemons } = useContext(FavoriteContext);
    console.log(favoritePokemons);

    return (
        <div className="nav">
            <div />
            <div>
                <img 
                    src={pokemonLogo} 
                    alt='Pokemon logo'
                    className="navbar-logo" />
            </div>
            <div>&#10084;&#65039; {favoritePokemons.length}</div>
        </div>
    );
};

export default Navbar;