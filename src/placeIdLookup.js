const placeIdLookup = (placeId) => {
  const url = 'https://maps.googleapis.com/maps/api/place/details/json';
  const key = process.env.REACT_APP_MAPS_PLACES_API_KEY;

  fetch(`${url}?place_id=${placeId}&key=${key}`, {
    method: 'POST'
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) =>
      console.log(`error fetching place information: ${error}`)
    );
};

export default placeIdLookup;
