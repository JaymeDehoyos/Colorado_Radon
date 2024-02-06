// import React from 'react'
import { Typography, Rating } from "@material-tailwind/react";

function ZReview() {
  return (
    <div className="w-3/4 text-center md:w-2/4">
      <Typography
        variant="lead"
        color="black"
        className="mb-12 opacity-80"
      >
        &quot;Jared is a highly skilled craftsman.  He built a patio cover for our home and did a wonderful job.
        We are thrilled with the design, stone pillars, and quality of work.
        We have enjoyed our patio for almost two years now and it gives our home a larger feel.
        Jared is also very prompt, kind, and has a great sense of humor.&quot;
      </Typography>
      <Typography
        variant="h6"
        color="black"
        className="mb-4"
      >
        Z Hamilton
        <br></br>
        Google Review
      </Typography>
      <div className="flex justify-center">
        <Rating className="flex" unratedColor="amber" ratedColor="amber" value={5} readonly />
      </div>
    </div>
  )
}

export default ZReview
