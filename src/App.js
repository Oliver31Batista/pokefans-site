import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar.jsx';
import Inicio from './components/pages/Inicio.jsx';
import Pokemon from './components/pages/Pokemon.jsx';
import Items from './components/pages/Items.jsx';
import Galeria from './components/pages/Galeria';


function App () {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Inicio/>} exact/>
          <Route path='/Pokemon' element = {<Pokemon/>}/>
          <Route path='/items' element = {<Items/>}/>
          <Route path='/Galeria' element = {<Galeria/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
