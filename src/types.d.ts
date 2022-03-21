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
