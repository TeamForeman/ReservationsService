import React, {useState} from 'react';
import './Price.css';

const Price = ({props}) => {
  const price = 50;
  return (
    <div className="price">
      <p className="price-part"> ${price}</p>
      <p className="night">/night</p>
    </div>
  );
};
export default Price;