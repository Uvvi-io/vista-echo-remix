
import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PropertyHeader = () => {
  const { t } = useLanguage();

  return (
    <div className="mb-6">
      <h1 className="text-3xl md:text-4xl font-bold text-estate-gray-dark">{t('property.price')}</h1>
      <div className="flex items-center mt-2 text-lg text-estate-gray-dark">
        <MapPin size={18} className="mr-1 flex-shrink-0" />
        <h2 className="font-medium">{t('property.address')}</h2>
      </div>
    </div>
  );
};

export default PropertyHeader;
