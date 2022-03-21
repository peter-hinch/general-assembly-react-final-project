import * as React from 'react';
import { motion } from 'framer-motion';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import Map from '../components/shared/Map';
import DetailsPane from '../components/shared/DetailsPane';

const transition = { duration: 0.3, type: 'easeInOut' };

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};

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

// Declare the nested structure of the venueData FeatureCollection.
interface FeatureCollection {
  type: string;
  features: Array<Feature>;
}
interface Feature {
  geometry: object;
  properties: FeatureProperties;
  type: string;
}
interface FeatureProperties {
  place_id: string;
  name: string;
  description: string;
  rating: number;
}

function MapView({ venueData }: { venueData: FeatureCollection }) {
  const [currentPlace, setCurrentPlace] = React.useState({
    geometry: {},
    properties: {
      place_id: '',
      name: '',
      description: '',
      rating: 0
    },
    type: ''
  });

  const center = { lat: -37.840935, lng: 144.946457 };
  const zoom = 12;

  const handleSelection = (placeId: string) => {
    let currentPlaceInfo = venueData.features.filter(
      (feature: Feature) => feature.properties.place_id === placeId
    )[0];
    setCurrentPlace(currentPlaceInfo);
  };

  return (
    <motion.div
      variants={pageVariants}
      key="home"
      initial="initial"
      animate="enter"
      exit="exit"
      transition={transition}
    >
      <Wrapper
        apiKey={process.env.REACT_APP_MAPS_PLACES_API_KEY}
        render={render}
      >
        <Map
          center={center}
          zoom={zoom}
          venueData={venueData}
          handleSelection={handleSelection}
        />
      </Wrapper>
      <DetailsPane currentPlace={currentPlace} />
    </motion.div>
  );
}

export default MapView;
