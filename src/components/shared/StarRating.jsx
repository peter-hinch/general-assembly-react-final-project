function StarRating({ rating }) {
  const ratingToStars = () => {
    // TODO - let's start with basic, will likely need a refactor
    if (rating >= 80 && rating <= 100) {
      return '⭐⭐⭐⭐⭐';
    } else if (rating >= 60 && rating < 80) {
      return '⭐⭐⭐⭐';
    } else if (rating >= 40 && rating < 60) {
      return '⭐⭐⭐';
    } else if (rating >= 20 && rating < 40) {
      return '⭐⭐';
    } else {
      return '⭐';
    }
  };

  return <div className="star-rating">{ratingToStars()}</div>;
}

export default StarRating;
