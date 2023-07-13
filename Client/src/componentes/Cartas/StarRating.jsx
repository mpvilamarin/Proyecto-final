import React from 'react';
import styles from './cards.module.css'

const StarRating = ({ rating }) => {
  // Function to create an array of filled stars based on the rating value
  const createStars = (rating) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return filledStars + emptyStars;
  };

  return (
    <div className={styles.contStar}>
      <span className={styles.stars}>{createStars(rating)}</span>
    </div>
  );
};

export default StarRating;
