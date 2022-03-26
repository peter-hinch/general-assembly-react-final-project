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
      <div className="spot-rating">
        <h4>Spot Rating</h4>
        <StarRating />
        <a href="#details">More about this spot</a>
      </div>
      <DetailsPane currentPlace={currentPlace} />
      <h3 id="details">Spot details</h3>
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(spotRatingDetails, null, 2)}
      </pre>
      <small>{placeid}</small>
    </div>
  );
};

export default PlaceDisplay;
