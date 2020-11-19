import React, {useState} from 'react';
import './Fees.css';

const Fees = (props) => {
  const Fees = {};
  return (
    <div>
      <a className="text">You won't be charged yet</a>
      <div className="content-style-grid">
        <div className="price-text">
          {props.fees.price} X {props.fees.nights} nights
        </div>
        <div className="price-number">
          ${props.fees.price * props.fees.nights}
        </div>
        <div className="cleaning-text">
          Cleaning Fee
        </div>
        <div className="cleaning-number">
          ${props.fees.cleanigFee * props.fees.nights}
        </div>
        <div className="service-text">
          Service Fee
        </div>
        <div className="service-number">
          ${props.fees.serviceFee * props.fees.nights}
        </div>
        {/* <hr className="line"/> */}
        <div className="total-text">
         Total
        </div>
        <div className="total-number">
          ${props.fees.total * props.fees.nights}
        </div>
      </div>
      {/* <p>{props.fees.price} X {props.fees.nights} nights  $ {props.fees.price * props.fees.nights}</p>
      <p>Cleaning Fee $ {props.fees.cleanigFee * props.fees.nights}</p>
      <p>Service Fee $ {props.fees.serviceFee * props.fees.nights}</p>
      <p>Total $ {props.fees.total * props.fees.nights}</p> */}
    </div>
  );
};
export default Fees;