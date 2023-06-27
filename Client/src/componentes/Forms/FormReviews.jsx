import React, { useState } from 'react';

const FormReviews = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Espacio para enviar los datos al back, el texto y el rating
    console.log('Texto:', text);
    console.log('Rating:', rating);
    setText('');
    setRating(0);
  };

  return (
    <div>
      <h2>Escribe tu reseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Comentario:</label>
          <textarea id="text" value={text} onChange={handleTextChange} />
        </div>
        <div>
          <label htmlFor="rating">Calificación:</label>
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

// Componente de sistema de calificación de estrellas
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

export default FormReviews;
