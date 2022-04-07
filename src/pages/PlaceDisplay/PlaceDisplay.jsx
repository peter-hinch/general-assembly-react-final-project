import { useParams } from 'react-router-dom';
import * as s from './PlaceDisplay.styles';
import StarRating from '../../components/shared/StarRating/StarRating';
import DetailsPane from '../../components/shared/DetailsPane/DetailsPane';
import RatingDetails from '../../components/shared/RatingDetails/RatingDetails';
import RatingForm from '../../components/shared/RatingForm/RatingForm';

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
      <s.StyledRatingBar id="spot-rating">
        <div className="rating-lead">
          {spotRating !== null ? (
            // Only display a rating for locations with rating information.
            <>
              <s.StyledRatingBarH4>Spot Rating</s.StyledRatingBarH4>
              <StarRating rating={spotRating} />
            </>
          ) : (
            <>
              <s.StyledRatingBarH4>No ratings yet..</s.StyledRatingBarH4>
            </>
          )}
        </div>
        {spotRating !== null ? (
          // Link to more ratings if rating information is present.
          <>
            <s.StyledRatingBarLink href="#rating-details">
              More about this spot
            </s.StyledRatingBarLink>
          </>
        ) : (
          // Otherwise provide a link to the ratings form.
          <>
            <s.StyledRatingBarLink href="#rating-your-say">
              Rate this spot
            </s.StyledRatingBarLink>
          </>
        )}
      </s.StyledRatingBar>
      <DetailsPane currentPlace={currentPlace} />
      {spotRatingDetails !== null && (
        <>
          <s.StyledRatingBar top={true} id="rating-details">
            <div className="rating-lead">
              <s.StyledRatingBarH4>Rating Details</s.StyledRatingBarH4>
            </div>
            <s.StyledRatingBarLink href="#rating-your-say">
              Rate this spot
            </s.StyledRatingBarLink>
          </s.StyledRatingBar>
          <RatingDetails
            key={spotRatingDetails.placeId}
            ratingsObject={spotRatingDetails}
          />
        </>
      )}
      <s.StyledRatingBar id="rating-your-say">
        <div className="rating-lead">
          <s.StyledRatingBarH4>What did you think?</s.StyledRatingBarH4>
        </div>
      </s.StyledRatingBar>
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
