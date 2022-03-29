import RatingCategoryScores from './RatingCategoryScores';

const RatingDetails = ({ ratingsObject }) => {
  console.log(ratingsObject);

  const ratings = ratingsObject.ratings;

  return (
    <>
      <RatingCategoryScores title={'Noise'} categoryScores={ratings.noise} />
      <RatingCategoryScores title={'Social'} categoryScores={ratings.social} />
      <RatingCategoryScores
        title={'Coworking'}
        categoryScores={ratings.coworking}
      />
      <RatingCategoryScores
        title={'Internet'}
        categoryScores={ratings.internet}
      />
      <RatingCategoryScores title={'Power'} categoryScores={ratings.power} />
      <RatingCategoryScores
        title={'Accessibility'}
        categoryScores={ratings.a11y}
      />
    </>
  );
};

export default RatingDetails;
