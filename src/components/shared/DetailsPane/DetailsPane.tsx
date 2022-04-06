import * as React from 'react';
import * as s from './DetailsPane.styles';
import imgPoweredByGoogle from './../../../assets/powered-by-google.png';

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
    return (
      <s.StyledPlaceImageLink href={components[1]}>
        Image: {components[2]}
      </s.StyledPlaceImageLink>
    );
  }
};

const DetailsPane = ({ currentPlace }: { currentPlace: PlacesApiResponse }) => {
  return (
    <>
      {Object.keys(currentPlace).length !== 0 && (
        <s.StyledDetailsPane>
          <h2>{currentPlace.name}</h2>
          <s.StyledContactInfo>
            <s.StyledSpan>{currentPlace.formatted_address}</s.StyledSpan>
            <s.StyledSpan>{currentPlace.formatted_phone_number}</s.StyledSpan>
            <s.StyledSpan>
              <a href={currentPlace.website}>Website</a>
            </s.StyledSpan>
          </s.StyledContactInfo>
          <s.StyledAdditionalInfo>
            {currentPlace.hasOwnProperty('photos') && (
              /* When using images returned by the Places API, if an attribution
              exists for that image it must be displayed with the result. */
              <s.StyledPlaceImages>
                <s.StyledPlaceImage
                  src={currentPlace.photos[0].getUrl()}
                  alt={currentPlace.name}
                />
                <small className="img-attributes">
                  <em>
                    {parseAttributes(currentPlace.photos[0].html_attributions)}
                  </em>
                </small>
              </s.StyledPlaceImages>
            )}
            <s.StyledOpeningHours>
              <h4>Opening Hours</h4>
              {currentPlace.hasOwnProperty('opening_hours') && (
                <s.StyledOpeningHoursUl>
                  {currentPlace.opening_hours.weekday_text.map(
                    (weekday: any, index: number) => (
                      <li key={index}>{weekday}</li>
                    )
                  )}
                </s.StyledOpeningHoursUl>
              )}
            </s.StyledOpeningHours>
          </s.StyledAdditionalInfo>
          {/* Results returned by the Google Places API must have a link to the 
          Google Business Profile for that result. */}
          <s.StyledGoogleAttribution>
            <small>
              <s.StyledGoogleAttributionLink href={currentPlace.url}>
                Google Business Profile for {currentPlace.name}
              </s.StyledGoogleAttributionLink>
            </small>
            <s.StyledGoogleAttributionImage
              src={imgPoweredByGoogle}
              alt="powered by Google"
            />
          </s.StyledGoogleAttribution>
        </s.StyledDetailsPane>
      )}
    </>
  );
};

export default DetailsPane;
