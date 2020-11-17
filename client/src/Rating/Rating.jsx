import React, {useState} from 'react';

const Rating = (props) => {
  const rating = 5.0;
  const count = 15;
  return (
    <div>
      <p>{rating} ({count})</p>
    </div>
  );
};
export default Rating;