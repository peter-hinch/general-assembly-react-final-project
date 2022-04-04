declare module '*.png';

interface RatingsData {
  [key: string]: PlaceRating;
}

interface PlaceRating {
  spotAverage: number;
  categories: Array<Category>;
}

interface Category {
  title: string;
  categoryAverage: number;
  scores: Array<Score>;
}

interface Score {
  score: number;
  comment: string;
}

interface PlacesApiResponse {
  place_id: string;
  geometry: any;
  name: any;
  website: string;
  photos: any;
  formatted_address: string;
  formatted_phone_number: any;
  opening_hours: any;
  url: string;
}
