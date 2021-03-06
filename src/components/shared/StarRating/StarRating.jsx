import * as s from './StarRating.styles';

function StarRating({ rating }) {
  const ratingToStars = () => {
    // TODO - let's start with basic, will likely need a refactor
    if (rating >= 80 && rating <= 100) {
      return `⭐⭐⭐⭐⭐ (${rating})`;
    } else if (rating >= 60 && rating < 80) {
      return `⭐⭐⭐⭐ (${rating})`;
    } else if (rating >= 40 && rating < 60) {
      return `⭐⭐⭐ (${rating})`;
    } else if (rating >= 20 && rating < 40) {
      return `⭐⭐ (${rating})`;
    } else {
      return `⭐ (${rating})`;
    }
  };

  return <s.StyledStarRating>{ratingToStars()}</s.StyledStarRating>;
}

export default StarRating;
