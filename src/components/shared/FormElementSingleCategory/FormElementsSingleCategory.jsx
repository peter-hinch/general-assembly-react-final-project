import * as s from './FormElementSingleCategory.styles';

const FormElementsSingleCategory = ({ categoryScore, handleScoreChange }) => {
  return (
    <div className="add-rating-category">
      <h5>{categoryScore.title}</h5>
      <div className="add-rating-mini-form">
        <label htmlFor="rating">Rating</label>
        <input
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
        <h6 className="rating-value">{categoryScore.score}</h6>
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={categoryScore.comment}
          onChange={(event) =>
            handleScoreChange(categoryScore.title, {
              comment: event.target.value
            })
          }
        />
      </div>
    </div>
  );
};

export default FormElementsSingleCategory;
