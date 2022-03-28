import { useParams } from 'react-router-dom';
import StarRating from '../components/shared/StarRating';
import DetailsPane from './../components/shared/DetailsPane';

const PlaceDisplay = ({ currentPlace, ratingsData, placesApiData }) => {
  const { placeid } = useParams();

  const spotRatingDetails = ratingsData.filter(
    (rating) => rating.placeId === currentPlace.place_id
  );

  const spotRating = spotRatingDetails[0].ratings.overall;

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
        <a href="#" className="rating-link">
          Rate this spot
        </a>
      </div>
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(spotRatingDetails, null, 2)}
      </pre>
      <small>{placeid}</small>
    </div>
  );
};

export default PlaceDisplay;
