import * as React from 'react';

const DetailsPane = ({ currentPlace }: { currentPlace: Place }) => {
  return (
    <div className="details-pane">
      <h2>{currentPlace.placeId}</h2>
      {/* {currentPlace.properties.rating !== null && (
        <p>Rating: {currentPlace.properties.rating} stars</p>
      )}
      <p>{currentPlace.properties.description}</p>
      <small>{currentPlace.properties.place_id}</small> */}
    </div>
  );
};

export default DetailsPane;
