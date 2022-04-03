const RatingCategoryScores = ({ categoryObject }) => {
  const scoreCommentsList = categoryObject.scores.map((item, index) => (
    <li key={index} className="user-score">
      <h6>{item.score}</h6>
      <p>{item.comment}</p>
    </li>
  ));

  return (
    <>
      <h5 className="category-score">
        {categoryObject.name} - {categoryObject.categoryAverage}
      </h5>
      <ul className="user-score-list">{scoreCommentsList}</ul>
    </>
  );
};

export default RatingCategoryScores;
