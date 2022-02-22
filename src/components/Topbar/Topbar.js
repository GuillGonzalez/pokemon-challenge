import React from 'react';
import logoPokemon from '../../assets/logo-pokemon.png'
import './style.sass';

function Topbar() {
    return (
        <div className="Topbar">
            <img src={ logoPokemon } alt='logo'/>
        </div>
    );
}

export default Topbar;
