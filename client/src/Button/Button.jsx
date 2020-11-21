import React, {useState} from 'react';
import './Button.css';

const Button = (props) => {
  const buttonTytle = props.buttonTitle;
  const buttonClick = () => {
    if (buttonTytle === 'Check Availability') {
    } else {
      props.makeReservation();
    }
  };
  return (
    <div>
      <button onClick = {buttonClick} className = "btn-red-em">{buttonTytle}</button>
    </div>
  );
};
export default Button;
