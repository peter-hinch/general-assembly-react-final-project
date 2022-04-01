const FormElementsSingleCategory = ({ categoryScore, handleScoreChange }) => {
  return (
    <div>
      <h5>{categoryScore.category}</h5>
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
            handleScoreChange(categoryScore.category, {
              score: event.target.value
            })
          }
        />
        <span className="rating-value">{categoryScore.score}</span>
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={categoryScore.comment}
          onChange={(event) =>
            handleScoreChange(categoryScore.category, {
              comment: event.target.value
            })
          }
        />
      </div>
    </div>
  );
};

export default FormElementsSingleCategory;
