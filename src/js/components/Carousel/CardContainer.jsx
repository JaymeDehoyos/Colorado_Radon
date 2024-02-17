// import React from 'react'
import PropTypes from 'prop-types'

import { Typography, Rating } from '@material-tailwind/react';

function CardContainer({children, name, rating=0}) {
  return (
    <div className="relative h-full w-full">
      <div className="inset-0 grid h-full w-full place-items-center">
        <div className="w-3/4 text-center md:w-2/4">
          <div className="flex justify-between">
            <Typography
              variant="h6"
              color="black"
              className="mb-4"
            >
              {name ? `${name} - Google Review` : 'Anonimouse'}
            </Typography>

          <div className="flex justify-right">
            <Rating className="flex" unratedColor="amber" ratedColor="amber" value={rating} readonly />
          </div>
          </div>
          <Typography
            variant="lead"
            color="black"
            className="mb-12 opacity-80"
          >
            &quot;{children}&quot;
          </Typography>
        </div>
      </div>
    </div>
  )
}

CardContainer.propTypes = {
  children: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
}

export default CardContainer

