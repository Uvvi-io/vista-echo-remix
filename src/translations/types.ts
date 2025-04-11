
// Define our available languages
export type Language = 'en' | 'es';

// Translation dictionary type
export type TranslationDict = {
  [key: string]: {
    en: string;
    es: string;
  };
};
