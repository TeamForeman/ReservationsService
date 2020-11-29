import React, {useState} from 'react';
import svg from 'svg';
import Desctiption from './description.jsx';
import './styled.css';
import ExtraInformation from './extraInformation.jsx';
import Amenities from './amenities.jsx';
import FirtsTitle from './firstTitle.jsx';


const Text = (props) => {
  return (
    <div>
      <div className ="MainDivEM">
        <FirtsTitle guests={props.guests}/>
        <hr className ="LineEM"/>
        <Desctiption/>
        <hr className ="LineEM"/>
        <ExtraInformation/>
        <hr className ="LineEM"/>
        <Amenities/>
        <hr className ="LineEM"/>
      </div>

    </div>

  );
};
export default Text;