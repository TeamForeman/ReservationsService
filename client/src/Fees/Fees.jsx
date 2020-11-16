import React, {useState} from 'react';

const Fees = (props) => {
  const Fees = {};
  return (
    <div>
      <a>You won't be charged yet</a>
      <p>{props.prise} X {props.nights} nights  $ {props.fees.appartmentCost}</p>
      <p>Cleaning Fee $ {props.fees.cleanigFee}</p>
      <p>Service Fee $ {props.fees.ServiceFee}</p>
      <p>Total $ {props.fees.total}</p>
    </div>
  );
};
export default Fees;