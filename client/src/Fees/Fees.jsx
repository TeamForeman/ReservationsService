import React, {useState} from 'react';

const Fees = (props) => {
  const Fees = {};
  return (
    <div>
      <a>You won't be charged yet</a>
      <p>{props.fees.price} X {props.fees.nights} nights  $ {props.fees.price * props.fees.nights}</p>
      <p>Cleaning Fee $ {props.fees.cleanigFee * props.fees.nights}</p>
      <p>Service Fee $ {props.fees.serviceFee * props.fees.nights}</p>
      <p>Total $ {props.fees.total * props.fees.nights}</p>
    </div>
  );
};
export default Fees;