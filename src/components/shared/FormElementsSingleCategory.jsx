import { useState } from 'react';

const FormElementsSingleCategory = ({ category }) => {
  const [inputRating, setInputRating] = useState(50);
  const [inputRange, setInputRange] = useState(50);

  const handleInputRatingChange = (event) => {
    setInputRating(event.target.value);
  };

  return (
    <>
      <h5>{category}</h5>
      <label for="rating">Rating</label>
      <input
        id="rating"
        type="range"
        min="1"
        max="100"
        step="1"
        value={inputRating}
        onChange={(event) => handleInputRatingChange(event)}
      />
      <span>{inputRating}</span>
      <label for="comment">Comment</label>
      <textarea id="comment" />
    </>
  );
};

export default FormElementsSingleCategory;
