import React, {useState} from 'react';
import svg from 'svg';
import Desctiption from './description.jsx';
import {MainDivEM, LineEM} from './styled-components.js';
import ExtraInformation from './extraInformation.jsx';
import Amenities from './amenities.jsx';
import './style.css';

const Text = () => {
  return (
    <div>
      <MainDivEM>
        <LineEM/>
        <Desctiption/>
        <LineEM/>
        <ExtraInformation/>
        <LineEM/>
        <Amenities/>
        <LineEM/>
      </MainDivEM>

    </div>

  );
};
export default Text;