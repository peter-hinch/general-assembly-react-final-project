import * as s from './RatingCategoryScores.styles';

const RatingCategoryScores = ({ categoryObject }) => {
  const scoreCommentsList = categoryObject.scores.map((item, index) => (
    <s.StyledUserScoresLi key={index}>
      <s.StyledUserScoresH6>{item.score}</s.StyledUserScoresH6>
      <s.StyledUserScoresP>{item.comment}</s.StyledUserScoresP>
    </s.StyledUserScoresLi>
  ));

  return (
    <>
      <h5 className="category-score">
        {categoryObject.title} - {categoryObject.categoryAverage}
      </h5>
      <s.StyledUserScoresUl>{scoreCommentsList}</s.StyledUserScoresUl>
    </>
  );
};

export default RatingCategoryScores;
