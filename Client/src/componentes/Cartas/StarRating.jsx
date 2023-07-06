import React from 'react';

const StarRating = ({ rating }) => {
  // Function to create an array of filled stars based on the rating value
  const createStars = (rating) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return filledStars + emptyStars;
  };

  return (
    <div>
      <span>{createStars(rating)}</span>
    </div>
  );
};

export default StarRating;
