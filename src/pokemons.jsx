import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function trimUrl(link) { 
    return '/'+link.split('/')[6];
}
function Pokemons({ pokemons }) {
    return (
        <div>
            {/* All Pokemons is here */}
            {pokemons.map(pokemon => {
                trimUrl(pokemon.url)
                return (
                    < div key={pokemon.name} className='pokemonRow' >
                        <h3>{pokemon.name}</h3>
                        <Link to={trimUrl(pokemon.url)}>Link</Link>
                    </div>
                )
            })}

        </div >
    );
}

export default Pokemons;