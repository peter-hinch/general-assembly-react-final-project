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

// This component is based on the example for the package @googlemaps/react-wrapper
// Reference: https://github.com/googlemaps/react-wrapper/blob/main/examples/basic.tsx

function Map({
  center,
  zoom
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = React.useRef();

  React.useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom
    });
  });

  return <div ref={ref} id="map" />;
}

export default Map;
