
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PropertyDescription = () => {
  const { t } = useLanguage();

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-estate-gray-dark mb-3">{t('property.aboutHome')}</h3>
      <div className="text-estate-gray-dark space-y-4">
        <p>{t('property.description1')}</p>
        <p>{t('property.description2')}</p>
        <p>{t('property.description3')}</p>
      </div>
    </div>
  );
};

export default PropertyDescription;
