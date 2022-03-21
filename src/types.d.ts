// Declare the nested structure of the venueData FeatureCollection.

interface FeatureCollection {
  type: string;
  features: Array<Feature>;
}

interface Feature {
  geometry: FeatureGeometry;
  properties: FeatureProperties;
  type: string;
}

interface FeatureGeometry {
  type: string;
  coordinates: Array<number>;
}

interface FeatureProperties {
  place_id: string;
  name: string;
  description: string;
  rating: number | null;
}
