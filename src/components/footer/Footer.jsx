import React from 'react'
import { Link } from 'react-router-dom'
// import pokemonLogo from '../imgs/pokemonLogo.png'

function Footer() {
  return (
    <div>
    <footer className='text-white py-4 bg bg-dark'>
        <div className="container">
            <nav className='row'>
                <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                    {/* <img src={pokemonLogo} className='mx-2' alt="Logo Pokemon" width='300' height='100' /> */}
                </Link>
                <ul className='col-12 col-md-3 list-unstyled'>
                  <li className='font-weight-bold mb-2'>Pokemon</li>
                  <li className='text-center'>En este sitio web podras encontrar informaciones sobre tus pokemones favoritos</li>
                </ul>
                <ul className='col-12 col-md-3 list-unstyled'>
                  <li className='font-weight-bold mb-2'>Enlaces</li>
                  <li className='text-reset'><Link to='/pokemon'>Pokemon</Link></li>
                  <li className='text-reset'><Link to='/items'>Items</Link></li>
                </ul>
                <ul className='col-12 col-md-3 list-unstyled'>
                  <li className='font-weight-bold mb-2'>Pokemon</li>
                  <li className='text-center'>En este sitio web podras encontrar informaciones sobre tus pokemones favoritos</li>
                </ul>
                <div className="container">
                  <p className='text-center mb-0 mt-2'>© 2022 Oliver Batista. All rights reserved.</p>
                </div>
            </nav>
        </div>
    </footer>
    </div>
  )
}

export default Footer