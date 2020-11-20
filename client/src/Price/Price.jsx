import React, {useState} from 'react';
import './Price.css';

const Price = ({props}) => {
  const price = 50 + Math.floor(Math.random() * 100 );
  //console.log('price props',props);
  return (
    <div>
      <div className="price-part"> ${price} <span className="night">/night </span></div>

    </div>
  );
};
export default Price;