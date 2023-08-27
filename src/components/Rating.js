import React from 'react';

const Rating = ({ children }) => {
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  const filledStar = '★';
  const emptyStar = '☆';

  return (
    <div className='body-rating' >
      {filledStar.repeat(filledStars)}
      {emptyStar.repeat(emptyStars)}
    </div>
  );
};

export default Rating;
