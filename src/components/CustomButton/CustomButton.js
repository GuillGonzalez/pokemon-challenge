import React from 'react';
import './style.sass';

function CustomButton(props) {
  return (
    <button className="custom__button" onClick={props.click}>{props.label}</button>
  )
}

export default CustomButton;