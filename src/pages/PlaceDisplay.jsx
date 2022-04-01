import { useParams } from 'react-router-dom';
import StarRating from '../components/shared/StarRating';
import DetailsPane from './../components/shared/DetailsPane';
import RatingDetails from '../components/shared/RatingDetails';
import RatingForm from '../components/shared/RatingForm';

const PlaceDisplay = ({
  currentPlace,
  ratingsData,
  userScores,
  handleScoreChange,
  handleFormReset,
  handleScoresSubmit
}) => {
  const { placeid } = useParams();

  // Ensure that ratings data exists before attempting to assign the data to an
  // object. If no data exists return null values for spotRating and
  // spotRatingDetails.
  let spotRatingDetails, spotRating;
  if (
    // Filter the ratingsData array to only the result that applies to this spot.
    // After the filter there should only be one result, assign the object at
    // index 0 to the new object 'spotRatingDetails'.
    ratingsData.filter((rating) => rating.placeId === currentPlace.place_id)
      .length > 0
  ) {
    spotRatingDetails = ratingsData.filter(
      (rating) => rating.placeId === currentPlace.place_id
    )[0];
    spotRating = spotRatingDetails.ratings.overall;
  } else {
    spotRatingDetails = null;
    spotRating = null;
  }

  return (
    <div>
      <div id="spot-rating" className="rating-bar">
        <div className="rating-lead">
          {spotRating !== null ? (
            // Only display a rating for locations with rating information.
            <>
              <h4>Spot Rating</h4>
              <StarRating rating={spotRating} />
            </>
          ) : (
            <>
              <h4>No ratings yet..</h4>
            </>
          )}
        </div>
        {spotRating !== null ? (
          // Link to more ratings if rating information is present.
          <>
            <a href="#rating-details" className="rating-link">
              More about this spot
            </a>
          </>
        ) : (
          // Otherwise provide a link to the ratings form.
          <>
            <a href="#rating-your-say" className="rating-link">
              Rate this spot
            </a>
          </>
        )}
      </div>
      <DetailsPane currentPlace={currentPlace} />
      {spotRatingDetails !== null && (
        <>
          <div id="rating-details" className="rating-bar">
            <div className="rating-lead">
              <h4>Rating Details</h4>
            </div>
            <a href="#rating-your-say" className="rating-link">
              Rate this spot
            </a>
          </div>
          <RatingDetails ratingsObject={spotRatingDetails} />
        </>
      )}
      <div id="rating-your-say" className="rating-bar">
        <div className="rating-lead">
          <h4>What did you think?</h4>
        </div>
      </div>
      <RatingForm
        userScores={userScores}
        handleScoreChange={handleScoreChange}
        handleFormReset={handleFormReset}
        handleScoresSubmit={handleScoresSubmit}
      />
    </div>
  );
};

export default PlaceDisplay;
