import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Pokemon = () => {
    const [pokemon, setPokemon] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const style='font-weight:bold';
    // console.log(location.pathname);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon' + location.pathname)
            .then((response) => response.json().then((data) => setPokemon(data)))
    }, [location.pathname]);
    console.log(pokemon);
    return (
        <div>
            <h1 className='text-center text-success fs-1 fw-bold' >{pokemon?.name}</h1>

            <div className='imgContainer'>
                <div class="card" >
                    <img src={pokemon?.sprites.other.home.front_default} />
                    <div class="card-body">
                        <div className='text-center'>
                            <button onClick={() => navigate('/')} className='btn btn-primary'>Back</button>
                            {pokemon?.id > 1 && <button className='btn btn-primary' onClick={() => navigate('/' + (pokemon?.id - 1))}>Prev</button>}
                            {pokemon?.id < 151 && <button className='btn btn-primary' onClick={() => navigate('/' + (pokemon?.id + 1))}>Next</button>}
                        </div>
                    </div>
                </div>
                {/* <img src={pokemon?.sprites.other.home.front_default} /> */}
            </div>
            {/* Single Pokemon with details */}

        </div>
    );
};

export default Pokemon;