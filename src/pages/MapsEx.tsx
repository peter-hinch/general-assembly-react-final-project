import * as React from 'react';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import Map from './../components/shared/Map';

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

const render = (status: Status): React.ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
};

function MapsEx() {
  const center = { lat: -37.840935, lng: 144.946457 };
  const zoom = 4;

  return (
    <Wrapper apiKey={process.env.REACT_APP_MAPS_JS_API_KEY} render={render}>
      <Map center={center} zoom={zoom} />
    </Wrapper>
  );
}

export default MapsEx;
