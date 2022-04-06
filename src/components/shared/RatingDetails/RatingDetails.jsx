import * as s from './RatingDetails.styles';
import RatingCategoryScores from '../RatingCategoryScores/RatingCategoryScores';

const RatingDetails = ({ ratingsObject }) => {
  const categoryScoresMap = ratingsObject.categories.map((category) => (
    <RatingCategoryScores key={category.title} categoryObject={category} />
  ));

  return <>{categoryScoresMap}</>;
};

export default RatingDetails;
