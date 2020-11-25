import React, {useState} from 'react';
import svg from 'svg';
import Desctiption from './description.jsx';
import './styled-components.css';
import ExtraInformation from './extraInformation.jsx';
import Amenities from './amenities.jsx';


const Text = () => {
  return (
    <div>
      <div className ="MainDivEM">
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