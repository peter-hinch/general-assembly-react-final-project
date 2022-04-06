import { useParams } from 'react-router-dom';
import StarRating from '../components/shared/StarRating';
import DetailsPane from './../components/shared/DetailsPane';
import RatingDetails from '../components/shared/RatingDetails';
import RatingForm from '../components/shared/RatingForm';

const PlaceDisplay = ({
  currentPlace,
  ratingsData,
  userScores,
  placesApiData,
  handleCurrentPlace,
  handleScoreChange,
  handleFormReset,
  handleScoresSubmit
}) => {
  // Pass in the place_id from the url to this page.
  const { placeId } = useParams();

  // Check whether the placeId passed in with the url matches the place_id of
  // the currentPlace. If not, attempt to set the currentPlace using an item
  // from placesApiData.
  console.log(placeId);
  // console.log(currentPlace.place_id);

  // Ensure that ratings data exists before attempting to assign the data to an
  // object. If no data exists return null values for spotRating and
  // spotRatingDetails.
  let spotRatingDetails, spotRating;
  if (ratingsData.hasOwnProperty(placeId)) {
    spotRatingDetails = ratingsData[placeId];
    spotRating = spotRatingDetails.spotAverage;
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
          <RatingDetails
            key={spotRatingDetails.placeId}
            ratingsObject={spotRatingDetails}
          />
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
