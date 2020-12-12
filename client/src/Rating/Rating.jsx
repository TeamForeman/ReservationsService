import React, {useState} from 'react';

const Rating = (props) => {
  const rating = props.rating;
  const reviews = props.reviews;
  return (
    <div>
      <div className="rating-part-em">{rating} ({reviews})</div>
    </div>
  );
};
export default Rating;