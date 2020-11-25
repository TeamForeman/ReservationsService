import React, {useState} from 'react';
import {ExtraInfoTextLightEM} from './styled-components.js';

const ExtraInformation = ()=> {
  return (
    <div>
      <ExtraInfoTextLightEM>
        Update: our neighborhood lake is currently drained for maintenance.
      </ExtraInfoTextLightEM>

      <ExtraInfoTextLightEM>
      If you are looking for a throw-back kind of family vacation, full of simple pleasures and fresh mountain air, you found it!
      </ExtraInfoTextLightEM>

      <ExtraInfoTextLightEM>
      The Nest at Big Trees is a cozy cabin located next door to Calaveras Big Trees State Park. We offer sleeping for up to 9 guests.
      </ExtraInfoTextLightEM>
    </div>
  );
};

export default ExtraInformation;