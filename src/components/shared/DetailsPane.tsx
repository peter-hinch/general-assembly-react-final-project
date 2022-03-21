import * as React from 'react';

function DetailsPane({ currentPlace }: { currentPlace: Feature }) {
  return (
    <div className="details-pane">
      <h2>{currentPlace.properties.name}</h2>
      <p>Rating: {currentPlace.properties.rating} stars</p>
      <p>{currentPlace.properties.description}</p>
      <small>{currentPlace.properties.place_id}</small>
    </div>
  );
}

export default DetailsPane;