import FormElementsSingleCategory from './FormElementsSingleCategory';

const RatingForm = ({ userScores, handleScoreChange, handleScoresSubmit }) => {
  const scoreComponentsMap = userScores.map((score) => (
    <FormElementsSingleCategory
      key={score.category}
      categoryScore={score}
      handleScoreChange={handleScoreChange}
    />
  ));

  return (
    <form>
      {scoreComponentsMap}
      <button
        className="add-rating-submit"
        onClick={(event) => handleScoresSubmit(event)}
      >
        Submit Rating
      </button>
    </form>
  );
};

export default RatingForm;
