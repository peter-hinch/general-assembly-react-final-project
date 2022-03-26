import { useParams } from 'react-router-dom';
import StarRating from '../components/shared/StarRating';
import DetailsPane from './../components/shared/DetailsPane';

const PlaceDisplay = ({ currentPlace, ratingsData, placesApiData }) => {
  const { placeid } = useParams();

  const spotRatingDetails = ratingsData.filter(
    (rating) => rating.placeId === currentPlace.place_id
  );

  return (
    <div>
      <div className="rating-bar">
        <div className="rating-lead">
          <h4>Spot Rating</h4>
          <StarRating rating={100} />
        </div>
        <a href="#rating-breakdown" className="rating-link">
          More about this spot
        </a>
      </div>
      <DetailsPane currentPlace={currentPlace} />
      <div id="rating-breakdown">
        <h3>Spot details</h3>
      </div>
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(spotRatingDetails, null, 2)}
      </pre>
      <small>{placeid}</small>
    </div>
  );
};

export default PlaceDisplay;
