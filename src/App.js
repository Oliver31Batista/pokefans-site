import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [allPokemons, setAllPokemons] = useState([]);

  
  const [loadMore, setLoadMOre] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    console.log(data)
  }

  useEffect(()=>{
    getAllPokemons()
  }, [])

  return (
    <div className='app-container'>
      <h1>Pokemon</h1>
      <div className='pokemon-container'>
        <div className='all-container'>

        </div>
        <button className='load-more'>Cargar más</button>
      </div>
    </div>
  );
}

export default App;
