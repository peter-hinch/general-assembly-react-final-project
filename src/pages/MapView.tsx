import * as React from 'react';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import Map from '../components/shared/Map';
import DetailsPane from '../components/shared/DetailsPane';

// Load the example dataset from local file.
const venues = require('../venues.json');

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

const render = (status: Status): React.ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
};

function MapView() {
  const center = { lat: -37.840935, lng: 144.946457 };
  const zoom = 12;

  return (
    <>
      <Wrapper apiKey={process.env.REACT_APP_MAPS_JS_API_KEY} render={render}>
        <Map center={center} zoom={zoom} venues={venues} />
      </Wrapper>
      <DetailsPane />
    </>
  );
}

export default MapView;
