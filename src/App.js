import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar1.jsx';
import Inicio from './components/pages/Inicio.jsx';
import Pokemon2 from './components/pages/Pokemon2.jsx';
import Items from './components/pages/Items.jsx';
import Galeria from './components/pages/Galeria';
import Footer from './components/footer/Footer';

function App () {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Inicio/>} exact/>
          <Route path='/Pokemon2' element = {<Pokemon2/>}/>
          <Route path='/items' element = {<Items/>}/>
          <Route path='/Galeria' element = {<Galeria/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
