import React, {useState} from 'react';

const FirtsTitle = (props) => {
  return (
    <div className ="FirstTitleGridEm">
      <div className ="FirstTitleBoldEm">
        Entire cabin hosted by Chloe
      </div>
      <div className ="FirstTitleLightEm">
        {props.guests} guests · 4 bedrooms · 6 beds · 2 baths
      </div>

      <img className ="FirstTitleImgEm" src='https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-3775540.jpeg'/>

    </div>

  );
};
export default FirtsTitle;