
import { TranslationDict } from './types';
import { navbarTranslations } from './navbar';
import { propertyTranslations } from './property';
import { neighborhoodTranslations } from './neighborhood';
import { contactTranslations } from './contact';

// Combine all translations
export const translations: TranslationDict = {
  ...navbarTranslations,
  ...propertyTranslations,
  ...neighborhoodTranslations,
  ...contactTranslations,
};
