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
  placesData,
  handleSelection
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  placesData: any;
  handleSelection: Function;
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

    const geocoder = new google.maps.Geocoder();
    const examplePlaceId = 'ChIJ6RxLlctC1moReA6DqUtnh_E';
    geocoder
      .geocode({ placeId: examplePlaceId })
      .then(({ results }) => {
        if (results[0]) {
          console.log('geocoder results', results);

          const marker = new google.maps.Marker({
            map,
            position: results[0].geometry.location
          });
        } else {
          console.log('no geocoder results returned.');
        }
      })
      .catch((error) => console.log(`geocoder failed: ${error}`));

    // Test adding to the maps data layer.
    // map.data.add({
    //   geometry: new google.maps.Data.Point(center)
    // });
    // Load the venues GeoJSON onto the map
    // Use 'addGeoJson()' for local data and 'loadGeoJson()' for remote data.
    // Reference: https://stackoverflow.com/questions/25334931/loading-a-local-geojson-file-and-using-it-with-the-google-maps-javascript-api-v3
    // map.data.addGeoJson(venueData, { idPropertyName: 'place_id' });
    // Add a listener for map pins
    const infoWindow = new google.maps.InfoWindow();
    map.data.addListener('click', (event: any) => {
      // const placeId = event.feature.getProperty('place_id');
      // handleSelection(placeId);
      // const name = event.feature.getProperty('name');
      // const rating = event.feature.getProperty('rating');
      const content = `
        HI!
      `;
      const position = event.feature.getGeometry().get();
      infoWindow.setContent(content);
      infoWindow.setPosition(position);
      infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
      infoWindow.open(map);
    });
  }, []);

  return <div ref={ref} id="map" />;
};

export default Map;
