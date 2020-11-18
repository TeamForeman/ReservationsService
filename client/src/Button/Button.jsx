import React, {useState} from 'react';
import './Button.css';

const Button = (props) => {
  const buttonTytle = props.buttonTitle;
  //console.log('buttonTitle', buttonTytle);
  const buttonClick = () => {
    if (buttonTytle === 'Check Availability') {
      console.log ('Check Availability Open Calendar');
    } else {
      props.makeReservation();
    }
  };
  return (
    <div>
      <button onClick = {buttonClick} className = "btn-red">{buttonTytle}</button>
    </div>
  );
};
export default Button;
