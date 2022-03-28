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
      <RatingDetails ratings={spotRatingDetails} />
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(spotRatingDetails, null, 2)}
      </pre>
      <small>{placeid}</small>
    </div>
  );
};

export default PlaceDisplay;
