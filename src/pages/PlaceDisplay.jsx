import { useParams } from 'react-router-dom';
import StarRating from '../components/shared/StarRating';
import DetailsPane from './../components/shared/DetailsPane';
import RatingDetails from '../components/shared/RatingDetails';

const PlaceDisplay = ({ currentPlace, ratingsData, placesApiData }) => {
  const { placeid } = useParams();

  // Filter the ratingsData array to only the result that applies to this spot.
  // After the filter there should only be one result, assign index 0 to the
  // spotRatingDetails object.
  const spotRatingDetails = ratingsData.filter(
    (rating) => rating.placeId === currentPlace.place_id
  )[0];

  const spotRating = spotRatingDetails.ratings.overall;

  return (
    <div>
      <div id="spot-rating" className="rating-bar">
        <div className="rating-lead">
          <h4>Spot Rating</h4>
          <StarRating rating={spotRating} />
        </div>
        <a href="#rating-details" className="rating-link">
          More about this spot
        </a>
      </div>
      <DetailsPane currentPlace={currentPlace} />
      <div id="rating-details" className="rating-bar">
        <div className="rating-lead">
          <h4>Rating Details</h4>
        </div>
        <a href="#rating-your-say" className="rating-link">
          Rate this spot
        </a>
      </div>
      <RatingDetails ratingsObject={spotRatingDetails} />
      <div id="rating-your-say" className="rating-bar">
        <div className="rating-lead">
          <h4>Your Rating</h4>
        </div>
      </div>
    </div>
  );
};

export default PlaceDisplay;
