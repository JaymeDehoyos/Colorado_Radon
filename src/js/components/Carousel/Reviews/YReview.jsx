// import React from 'react';

import { Typography, Rating } from '@material-tailwind/react';

const YReview = () => {
  return (
    <div className="w-3/4 text-center md:w-2/4">
      <div className="flex justify-between">
        <Typography
          variant="h6"
          color="black"
          className="mb-4"
        >
          Y Haburg - Google Review
        </Typography>

      <div className="flex justify-right">
        <Rating className="flex" unratedColor="amber" ratedColor="amber" value={1} readonly />
      </div>
      </div>
      <Typography
        variant="lead"
        color="black"
        className="mb-12 opacity-80"
      >
        &quot;Not enough video games on their phones to keep me entertained while on my trip there.&quot;
      </Typography>
    </div>
  );
};

export default YReview;
