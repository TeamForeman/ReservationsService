import React, {useState} from 'react';
import './Price.css';

const Price = (props) =>  {
  //const price = 50 + Math.floor(Math.random() * 100 );
  //console.log('price-em props-em',props);
  return (
    <div>
      <div className="price-part-em"> ${props.price} <span className="night-em">/night </span></div>

    </div>
  );
};
export default Price;