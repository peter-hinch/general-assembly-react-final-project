import React from 'react';

const RatingForm = () => {
  return (
    <form>
      <h5>Noise</h5>
      <label for="rating-noise">Noise Rating</label>
      <input id="rating-noise" type="range" min="1" max="100" step="1" />
      <label for="comment-noise">Noise Comments</label>
      <textarea id="comment-noise" />
    </form>
  );
};

export default RatingForm;
