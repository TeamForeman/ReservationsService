import React, {useState} from 'react';

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
      <button onClick = {buttonClick} >{buttonTytle}</button>
    </div>
  );
};
export default Button;
