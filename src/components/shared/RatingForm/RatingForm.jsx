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
    <form className="add-ratings">
      {formCategoriesMap}
      <div className="ratings-buttons">
        <button
          className="add-rating-reset"
          onClick={(event) => handleFormReset(event)}
        >
          Reset Form
        </button>
        <button
          className="add-rating-submit"
          onClick={(event) => handleScoresSubmit(event)}
        >
          Submit Rating
        </button>
      </div>
    </form>
  );
};

export default RatingForm;
