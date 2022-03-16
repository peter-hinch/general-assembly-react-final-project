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

function Map({
  center,
  zoom,
  venues
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  venues: string;
}) {
  const ref = React.useRef();

  React.useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom
    });

    // Load the venues GeoJSON onto the map
    console.log(typeof venues, venues);
    map.data.loadGeoJson(venues, { idPropertyName: 'venueid' });
  }, []);

  return <div ref={ref} id="map" />;
}

export default Map;
