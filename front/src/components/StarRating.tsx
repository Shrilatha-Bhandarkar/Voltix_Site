import React from 'react';
import "./styles/StarRating.css"

interface StarRatingProps {
  rating: number;
  maxRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating }) => {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    const starClass = i <= rating ? 'star filled' : 'star';
    stars.push(<div key={i} className={starClass}>&#9733;</div>);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
