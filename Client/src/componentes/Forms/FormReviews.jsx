import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReview } from '../../redux/Actions/post';

const StarRating = ({ rating, onRatingChange }) => {
  const handleStarClick = (newRating) => {
    onRatingChange(newRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{ color: star <= rating ? 'gold' : 'gray', cursor: 'pointer' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const FormReviews = ({fundacionNombre}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      comentarios: text,
      calificacion: rating,
      fundacion: fundacionNombre
    };
    dispatch(postReview(reviewData));
    setText('');
    setRating(0);
  };

  return (
    <div>
      <h3>Calificar Fundación: {fundacionNombre}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Calificación:</label>
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
        </div>
        <div>
          <label>Comentarios:</label>
          <textarea value={text} onChange={handleTextChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormReviews;
