import FormElementsSingleCategory from './FormElementsSingleCategory';

const RatingForm = ({ userScores, handleRatingSubmit }) => {
  return (
    <form>
      <FormElementsSingleCategory category="Noise" />
      <FormElementsSingleCategory category="Social" />
      <FormElementsSingleCategory category="Coworking" />
      <FormElementsSingleCategory category="Internet" />
      <FormElementsSingleCategory category="Power" />
      <FormElementsSingleCategory category="Accessibility" />
      <button
        className="add-rating-submit"
        onClick={(event) => handleRatingSubmit(event)}
      >
        Submit Rating
      </button>
    </form>
  );
};

export default RatingForm;
