import React, {useState} from 'react';

const Rating = (props) => {
  const rating = 5.0;
  const count = 15;
  return (
    <div>
      <div className="rating-part-em">{rating} <span className="count-em">({count})</span></div>
    </div>
  );
};
export default Rating;