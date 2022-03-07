import React, { useState, useEffect } from 'react';
import iconClose from '../../assets/icon-close.png'
import './style.sass';

function Card({ pokemon }) {

  const [isSelected, setSelected] = useState("false");

  const handle_toggle = () => {
    setSelected(!isSelected);
  };
  
    return (
        <div className={ isSelected ? "Card" : "Card --is-selected" } onClick={ handle_toggle }>
          <button className="Card__closeButton" onClick={ handle_toggle }>
            <img className="Card__closeButton-icon" src={ iconClose } />
          </button>
            <div className="Card__img">
                <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            
            <div className="Card__info">
                <div className="Card__data">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Order</p>
                    <p>{pokemon.order}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Ability</p>
                    <p className="ability">{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
