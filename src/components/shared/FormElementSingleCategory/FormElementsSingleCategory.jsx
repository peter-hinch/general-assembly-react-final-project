import * as s from './FormElementSingleCategory.styles';

const FormElementsSingleCategory = ({ categoryScore, handleScoreChange }) => {
  return (
    <s.StyledRatingCategory>
      <h5>{categoryScore.title}</h5>
      <s.StyledRatingMiniForm>
        <s.StyledRatingMiniFormLabel htmlFor="rating">
          Rating
        </s.StyledRatingMiniFormLabel>
        <s.StyledRatingMiniFormRange
          id="rating"
          type="range"
          min="1"
          max="100"
          step="1"
          value={categoryScore.score}
          onChange={(event) =>
            handleScoreChange(categoryScore.title, {
              score: event.target.value
            })
          }
        />
        <s.StyledRatingMiniFormValue>
          {categoryScore.score}
        </s.StyledRatingMiniFormValue>
        <s.StyledRatingMiniFormLabel htmlFor="comment">
          Comment
        </s.StyledRatingMiniFormLabel>
        <s.StyledRatingMiniFormTextarea
          id="comment"
          value={categoryScore.comment}
          onChange={(event) =>
            handleScoreChange(categoryScore.title, {
              comment: event.target.value
            })
          }
        />
      </s.StyledRatingMiniForm>
    </s.StyledRatingCategory>
  );
};

export default FormElementsSingleCategory;
