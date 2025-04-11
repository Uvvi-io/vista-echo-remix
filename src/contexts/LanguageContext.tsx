
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, TranslationDict } from '../translations/types';
import { translations } from '../translations';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: TranslationDict;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  translations,
});

// Create a provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    console.warn(`Translation key "${key}" not found`);
    return key;
  };

  const value = {
    language,
    setLanguage,
    t,
    translations,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// Create a hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Re-export the Language and TranslationDict types for convenience
export type { Language, TranslationDict };
