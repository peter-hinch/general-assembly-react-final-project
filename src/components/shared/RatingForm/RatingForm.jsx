import * as s from './RatingForm.styles';
import FormElementsSingleCategory from '../FormElementSingleCategory/FormElementsSingleCategory';

const RatingForm = ({
  userScores,
  handleScoreChange,
  handleFormReset,
  handleScoresSubmit
}) => {
  const formCategoriesMap = userScores.map((category) => (
    <FormElementsSingleCategory
      key={category.title}
      categoryScore={category}
      handleScoreChange={handleScoreChange}
    />
  ));

  return (
    <s.StyledRatingForm>
      {formCategoriesMap}
      <s.StyledRatingFormButtonsDiv>
        <s.StyledRatingFormButton
          className="add-rating-reset"
          onClick={(event) => handleFormReset(event)}
        >
          Reset Form
        </s.StyledRatingFormButton>
        <s.StyledRatingFormButton
          type="primary"
          className="add-rating-submit"
          onClick={(event) => handleScoresSubmit(event)}
        >
          Submit Rating
        </s.StyledRatingFormButton>
      </s.StyledRatingFormButtonsDiv>
    </s.StyledRatingForm>
  );
};

export default RatingForm;
