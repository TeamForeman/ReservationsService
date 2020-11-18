import React, {useState} from 'react';

const Rating = (props) => {
  const rating = 5.0;
  const count = 15;
  return (
    <div className="rating-part">
      <p className="rating">{rating}</p>
      <p className="count">({count})</p>
    </div>
  );
};
export default Rating;