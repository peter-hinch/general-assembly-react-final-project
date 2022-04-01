import FormElementsSingleCategory from './FormElementsSingleCategory';

const RatingForm = ({
  userScores,
  handleScoreChange,
  handleFormReset,
  handleScoresSubmit
}) => {
  const scoreComponentsMap = userScores.map((score) => (
    <FormElementsSingleCategory
      key={score.category}
      categoryScore={score}
      handleScoreChange={handleScoreChange}
    />
  ));

  return (
    <form className="add-ratings">
      {scoreComponentsMap}
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
