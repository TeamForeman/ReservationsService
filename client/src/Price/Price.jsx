import React, {useState} from 'react';
import './Price.css';

const Price = ({props}) => {
  const price = 50;
  return (
    <div>
      <div className="price-part"> ${price} <span className="night">/night </span></div>

    </div>
  );
};
export default Price;