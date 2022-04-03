import RatingCategoryScores from './RatingCategoryScores';

const RatingDetails = ({ ratingsObject }) => {
  const categoryScoresMap = ratingsObject.categories.map((category) => (
    <RatingCategoryScores categoryObject={category} />
  ));

  return <>{categoryScoresMap}</>;
};

export default RatingDetails;
