import { useState, useEffect, useRef } from 'react';

// Using the Google Places Autocomplete API from the following example.
// Reference: https://betterprogramming.pub/the-best-practice-with-google-place-autocomplete-api-on-react-939211e8b4ce

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

const PlaceSearch = ({ query }) => {
  const [queryInput, setQueryInput] = useState('');
  const [currentInfo, setCurrentInfo] = useState({});
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_PLACES_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQueryInput, autoCompleteRef)
    );
  }, []);

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ['establishment'] }
    );
    autoComplete.setFields([
      'place_id',
      'geometry',
      'name',
      'website',
      'photos',
      'formatted_address',
      'formatted_phone_number',
      'opening_hours',
      'url'
    ]);
    autoComplete.addListener('place_changed', () =>
      handlePlaceSelect(updateQuery)
    );
  }

  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const queryInput = addressObject.name;
    updateQuery(queryInput);
    console.log(addressObject);
    setCurrentInfo(addressObject);
  }

  const parseAttributes = (attributions) => {
    // Regular expression for extracting url and name from provided HTML object.
    // This avoids the need for using dangerouslySetInnerHTML in React:
    // 1st group: link url
    // 2nd group: contributor name
    let regex = /^<a href="(.*?)">(.*?)<\/a>$/;

    // Check that the array given for attributions contains an object.
    if (attributions.length > 0) {
      let string = attributions[0].toString();
      // Use the regex to obtain two groups and assign them to the array 'components'.
      let components = string.match(regex);
      // Return a link in JSX format.
      return <a href={components[1]}>Image: {components[2]}</a>;
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="search"
        ref={autoCompleteRef}
        value={queryInput}
        onChange={(event) => setQueryInput(event.target.value)}
      />
    </form>
  );
};

export default PlaceSearch;
