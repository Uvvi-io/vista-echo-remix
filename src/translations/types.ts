
// Define our available languages
export type Language = 'en' | 'es';

// Translation dictionary type
export type TranslationDict = {
  [key: string]: {
    en: string;
    es: string;
  };
};

// Google Maps related types
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface MapOptions {
  center: Coordinates;
  zoom: number;
  mapTypeControl?: boolean;
  streetViewControl?: boolean;
  fullscreenControl?: boolean;
}
