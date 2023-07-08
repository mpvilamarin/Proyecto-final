const Review = ({ review }) => {
    const renderStars = () => {
      const filledStars = review.calificacion; // Calificación recibida
      const totalStars = 5; // Total de estrellas
      const emptyStars = totalStars - filledStars;
  
      const stars = [];
      for (let i = 0; i < filledStars; i++) {
        stars.push(<span key={i} style={{ color: 'gold' }}>★</span>);
      }
      for (let i = 0; i < emptyStars; i++) {
        stars.push(<span key={i + filledStars} style={{ color: 'gray' }}>★</span>);
      }
      return stars;
    };
  
    return (
      <div style={{ border: '1px solid black' }}>
        <h4>{review.comentarios}</h4>
        {renderStars()}
      </div>
    );
  };
  
  export default Review;