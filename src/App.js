
import { useEffect, useState } from 'react';
import './App.css';
// import from 'pokemons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pokemon from './pokemon';
import Pokemons from './pokemons';

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      .then(Response => Response.json().then((data) =>  setPokemons(data.results)));
  }, [])
  // console.log(pokemons);
  return (
    <BrowserRouter>
      <div className='appContainer'>
        <h1>pokemons React App</h1>
        <Routes>
          <Route path='/' element={<Pokemons pokemons={pokemons}/>} />
          <Route path='/:id' element={<Pokemon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
