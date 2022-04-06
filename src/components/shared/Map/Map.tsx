import * as React from 'react';

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Based on the example for the package @googlemaps/react-wrapper and the Google
// CodeLab 'Build a simple store locator with Google Maps Platform (JavaScript)'
// Reference: https://github.com/googlemaps/react-wrapper/blob/main/examples/basic.tsx
// Reference: https://developers.google.com/codelabs/maps-platform/google-maps-simple-store-locator

const Map = ({
  center,
  zoom,
  ratingsData,
  handleNewPlacesApiData
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  ratingsData: RatingsData;
  handleNewPlacesApiData: any;
}) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
      // Map controls can be turned on and off.
      // Reference: https://developers.google.com/maps/documentation/javascript/controls#DisablingDefaults
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    });

    // Generate an array of markers from the ratingsData array and populate the map.
    generateMarkerArray(ratingsData, map);
  }, []);

  // Google maps API only allows storage of place_id information so the
  // geocoder API is used to find marker locations from the place_id saved
  // alongside the application's ratings information.
  const generateMarkerArray = (
    ratingsData: RatingsData,
    map: google.maps.Map
  ) => {
    const geocoder = new google.maps.Geocoder();
    const infoWindow = new google.maps.InfoWindow();
    const placesService = new google.maps.places.PlacesService(map);

    Object.keys(ratingsData).forEach((key) => {
      geocoder
        .geocode({ placeId: key })
        .then(({ results }) => {
          if (results[0]) {
            const marker = new google.maps.Marker({
              map,
              position: results[0].geometry.location,
              animation: google.maps.Animation.DROP
            });
            // Add request to placesService to populate additional information
            // for map markers.
            placesService.getDetails(
              {
                placeId: key,
                fields: [
                  'place_id',
                  'geometry',
                  'name',
                  'website',
                  'photos',
                  'formatted_address',
                  'formatted_phone_number',
                  'opening_hours.weekday_text',
                  'url'
                ]
              },
              (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                  addMarkerListener(results, marker, map, infoWindow);
                  handleNewPlacesApiData(results);
                }
              }
            );
            return marker;
          } else {
            console.log(`no geocoder results returned for key ${key}.`);
            return undefined;
          }
        })
        .catch((error) => {
          console.log(`geocoder failed: ${error} at key ${key}`);
          return undefined;
        });
      return undefined;
    });
  };

  // Function to add a listener to markers on the map as they are generated in
  // the generateMarkerArray function.
  const addMarkerListener = (
    placeResults: any,
    marker: google.maps.Marker,
    map: google.maps.Map,
    infoWindow: google.maps.InfoWindow
  ) => {
    google.maps.event.addListener(marker, 'click', (event: any) => {
      const content = `
        <div class="map-marker">
          <h5>${placeResults.name}</h5>
        </div>
      `;
      const position = event.latLng;
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
      infoWindow.open(map);
    });
  };

  return <div ref={ref} id="map" />;
};

export default Map;
