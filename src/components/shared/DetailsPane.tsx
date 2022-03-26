import * as React from 'react';
import imgPoweredByGoogle from './../../assets/powered-by-google.png';

const parseAttributes = (attributions: any) => {
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

const DetailsPane = ({ currentPlace }: { currentPlace: PlacesApiResponse }) => {
  return (
    <>
      {Object.keys(currentPlace).length !== 0 && (
        <div className="details-pane">
          <h2>{currentPlace.name}</h2>
          <div className="contact-info">
            <span>{currentPlace.formatted_address}</span>
            <span>{currentPlace.formatted_phone_number}</span>
            <span>
              <a href={currentPlace.website}>Website</a>
            </span>
          </div>
          {currentPlace.hasOwnProperty('photos') && (
            /* When using images returned by the Places API, if an attribution
            exists for that image it must be displayed with the result. */
            <div className="place-images">
              <img
                src={currentPlace.photos[0].getUrl()}
                alt={currentPlace.name}
              />
              <small className="img-attributes">
                <em>
                  {parseAttributes(currentPlace.photos[0].html_attributions)}
                </em>
              </small>
            </div>
          )}
          <div className="opening-hours">
            <h4>Opening Hours</h4>
            {currentPlace.hasOwnProperty('opening_hours') && (
              <>
                <p>
                  {currentPlace.opening_hours.isOpen ? 'Open Now' : 'Closed'}
                </p>
                <ul>
                  {currentPlace.opening_hours.weekday_text.map(
                    (weekday: any) => (
                      <li>{weekday}</li>
                    )
                  )}
                </ul>
              </>
            )}
          </div>
          {/* Results returned by the Google Places API must have a link to the 
          Google Business Profile for that result. */}
          <div className="google-attribution">
            <small>
              <a href={currentPlace.url}>
                Google Business Profile for {currentPlace.name}
              </a>
            </small>
            <img src={imgPoweredByGoogle} alt="powered by Google" />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPane;
