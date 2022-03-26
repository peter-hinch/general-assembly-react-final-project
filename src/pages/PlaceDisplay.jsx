import { useParams } from 'react-router-dom';
import DetailsPane from './../components/shared/DetailsPane';

const PlaceDisplay = ({ currentPlace, ratingsData, placesApiData }) => {
  const { placeid } = useParams();

  const placeRating = ratingsData.filter(
    (rating) => rating.placeId === currentPlace.place_id
  );

  return (
    <div>
      <h2>{currentPlace.name}</h2>
      <DetailsPane currentPlace={currentPlace} />
      <h3>Spot Ratings</h3>
      <pre style={{ textAlign: 'left' }}>
        {JSON.stringify(placeRating, null, 2)}
      </pre>
      <small>{placeid}</small>
    </div>
  );
};

export default PlaceDisplay;
