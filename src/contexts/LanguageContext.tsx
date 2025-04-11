import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define our available languages
export type Language = 'en' | 'es';

// Translation dictionary type
export type TranslationDict = {
  [key: string]: {
    en: string;
    es: string;
  };
};

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: TranslationDict;
};

// Create the translation dictionary
const translations: TranslationDict = {
  // Navbar
  'site.title': {
    en: 'EstateVista',
    es: 'EstateVista',
  },
  
  // Property header
  'property.price': {
    en: '$749,000',
    es: '$749,000',
  },
  'property.address': {
    en: '1300 13th St NW APT 102, Washington, DC 20005',
    es: '1300 Calle 13 NW APT 102, Washington, DC 20005',
  },
  
  // Property details
  'property.beds': {
    en: 'Beds',
    es: 'Habitaciones',
  },
  'property.baths': {
    en: 'Baths',
    es: 'Baños',
  },
  'property.sqft': {
    en: 'Sq Ft',
    es: 'Pies Cuad',
  },
  'property.yearBuilt': {
    en: 'Year Built',
    es: 'Año Construido',
  },
  'property.scheduleTour': {
    en: 'Schedule Tour',
    es: 'Programar Visita',
  },
  'property.contactAgent': {
    en: 'Contact Agent',
    es: 'Contactar Agente',
  },
  'property.aboutHome': {
    en: 'About This Home',
    es: 'Acerca de Esta Casa',
  },
  'property.description1': {
    en: 'Beautiful, sun-drenched 2-bed, 2-bath condo in the heart of Logan Circle. This stunning unit features an open floor plan, gourmet kitchen with stainless steel appliances, hardwood floors throughout, and oversized windows that fill the space with natural light.',
    es: 'Hermoso condominio de 2 habitaciones y 2 baños bañado por el sol en el corazón de Logan Circle. Esta impresionante unidad cuenta con un plano abierto, cocina gourmet con electrodomésticos de acero inoxidable, pisos de madera en toda la casa y ventanas grandes que llenan el espacio con luz natural.',
  },
  'property.description2': {
    en: 'The primary bedroom includes an en-suite bathroom and walk-in closet. The second bedroom is spacious and perfect for guests or a home office. Additional features include in-unit washer/dryer, central A/C, and secure building entry.',
    es: 'El dormitorio principal incluye un baño en suite y un vestidor. El segundo dormitorio es espacioso y perfecto para huéspedes o una oficina en casa. Características adicionales incluyen lavadora/secadora en la unidad, aire acondicionado central y entrada segura al edificio.',
  },
  'property.description3': {
    en: 'Located steps away from shops, restaurants, and public transportation. Building amenities include a rooftop deck with city views, fitness center, and bike storage.',
    es: 'Ubicado a pocos pasos de tiendas, restaurantes y transporte público. Las comodidades del edificio incluyen una terraza en la azotea con vistas a la ciudad, gimnasio y almacenamiento de bicicletas.',
  },
  'property.homeFeatures': {
    en: 'Home Features',
    es: 'Características del Hogar',
  },
  'property.interiorFeatures': {
    en: 'Interior Features',
    es: 'Características Interiores',
  },
  'property.interiorDetails': {
    en: 'Hardwood floors, central air, in-unit laundry',
    es: 'Pisos de madera, aire central, lavandería en la unidad',
  },
  'property.kitchen': {
    en: 'Kitchen',
    es: 'Cocina',
  },
  'property.kitchenDetails': {
    en: 'Stainless steel appliances, granite countertops',
    es: 'Electrodomésticos de acero inoxidable, encimeras de granito',
  },
  'property.buildingAmenities': {
    en: 'Building Amenities',
    es: 'Servicios del Edificio',
  },
  'property.buildingDetails': {
    en: 'Elevator, fitness center, rooftop deck',
    es: 'Ascensor, gimnasio, terraza en la azotea',
  },
  'property.location': {
    en: 'Location',
    es: 'Ubicación',
  },
  'property.locationDetails': {
    en: 'Near Metro, restaurants, shopping',
    es: 'Cerca del Metro, restaurantes, tiendas',
  },
  
  // 3D Tour
  'property.3dTour': {
    en: '3D Virtual Tour',
    es: 'Recorrido Virtual 3D',
  },
  
  // Contact form
  'contact.title': {
    en: 'Contact Agent',
    es: 'Contactar Agente',
  },
  'contact.agentTitle': {
    en: 'Lead Real Estate Agent',
    es: 'Agente Principal de Bienes Raíces',
  },
  'contact.callAgent': {
    en: 'Call Agent',
    es: 'Llamar Agente',
  },
  'contact.emailAgent': {
    en: 'Email Agent',
    es: 'Correo al Agente',
  },
  'contact.scheduleTour': {
    en: 'Schedule Tour',
    es: 'Programar Visita',
  },
  'contact.sendMessage': {
    en: 'Send a Message',
    es: 'Enviar un Mensaje',
  },
  'contact.yourName': {
    en: 'Your Name',
    es: 'Su Nombre',
  },
  'contact.emailAddress': {
    en: 'Email Address',
    es: 'Correo Electrónico',
  },
  'contact.phoneNumber': {
    en: 'Phone Number',
    es: 'Número de Teléfono',
  },
  'contact.messageLabel': {
    en: "I'm interested in this property. Please contact me with more information.",
    es: "Estoy interesado/a en esta propiedad. Por favor contácteme con más información.",
  },
  'contact.sendButton': {
    en: 'Send Message',
    es: 'Enviar Mensaje',
  },
  
  // Language selector
  'language.english': {
    en: 'English',
    es: 'Inglés',
  },
  'language.spanish': {
    en: 'Spanish',
    es: 'Español',
  },
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
