declare module '*.png';

interface Place {
  placeId: string;
  ratings: PlaceRatings;
}

interface PlaceRatings {
  quiet: number;
  friendly: number;
  wifi: number;
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
