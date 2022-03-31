import { useState } from 'react';

const FormElementsSingleCategory = ({ category }) => {
  const [categoryScore, setCategoryScore] = useState({
    score: 50,
    comment: ''
  });

  const handleInputChange = (value) => {
    setCategoryScore({ ...categoryScore, ...value });
  };

  return (
    <>
      <h5>{category}</h5>
      <div className="add-rating-category">
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="range"
          min="1"
          max="100"
          step="1"
          value={categoryScore.score}
          onChange={(event) => handleInputChange({ score: event.target.value })}
        />
        <span>{categoryScore.score}</span>
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          value={categoryScore.comment}
          onChange={(event) =>
            handleInputChange({ comment: event.target.value })
          }
        />
      </div>
    </>
  );
};

export default FormElementsSingleCategory;
