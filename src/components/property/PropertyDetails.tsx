
import React from 'react';
import { Bed, Bath, MapPin, Ruler, History, Coffee, Building, Tree } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyTour from './PropertyTour';

const PropertyDetails = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-6">
      {/* Price and Address */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-estate-gray-dark">{t('property.price')}</h1>
        <div className="flex items-center mt-2 text-lg text-estate-gray-dark">
          <MapPin size={18} className="mr-1 flex-shrink-0" />
          <h2 className="font-medium">{t('property.address')}</h2>
        </div>
      </div>

      {/* Key Details Card */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <Bed size={24} className="text-estate-primary mb-1" />
              <span className="text-sm text-estate-gray-dark">{t('property.beds')}</span>
              <span className="font-bold text-lg text-estate-gray-dark">2</span>
            </div>
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <Bath size={24} className="text-estate-primary mb-1" />
              <span className="text-sm text-estate-gray-dark">{t('property.baths')}</span>
              <span className="font-bold text-lg text-estate-gray-dark">2</span>
            </div>
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <Ruler size={24} className="text-estate-primary mb-1" />
              <span className="text-sm text-estate-gray-dark">{t('property.sqft')}</span>
              <span className="font-bold text-lg text-estate-gray-dark">1,200</span>
            </div>
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <History size={24} className="text-estate-primary mb-1" />
              <span className="text-sm text-estate-gray-dark">{t('property.yearBuilt')}</span>
              <span className="font-bold text-lg text-estate-gray-dark">2005</span>
            </div>
          </div>

          {/* Matterport 3D Tour Button - Positioned here as requested */}
          <div className="mt-6">
            <PropertyTour />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 bg-estate-accent hover:bg-estate-accent/90 text-white">{t('property.scheduleTour')}</Button>
            <Button variant="outline" className="flex-1 border-estate-primary text-estate-primary hover:bg-estate-primary/10">{t('property.contactAgent')}</Button>
          </div>
        </CardContent>
      </Card>

      {/* Property Description */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-estate-gray-dark mb-3">{t('property.aboutHome')}</h3>
        <div className="text-estate-gray-dark space-y-4">
          <p>{t('property.description1')}</p>
          <p>{t('property.description2')}</p>
          <p>{t('property.description3')}</p>
        </div>
      </div>

      {/* Property Features */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-estate-gray-dark mb-3">{t('property.homeFeatures')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <div className="flex items-start py-2">
            <Coffee size={20} className="text-estate-primary mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-estate-gray-dark">{t('property.interiorFeatures')}</h4>
              <p className="text-estate-gray-dark">{t('property.interiorDetails')}</p>
            </div>
          </div>
          <div className="flex items-start py-2">
            <Building size={20} className="text-estate-primary mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-estate-gray-dark">{t('property.kitchen')}</h4>
              <p className="text-estate-gray-dark">{t('property.kitchenDetails')}</p>
            </div>
          </div>
          <div className="flex items-start py-2">
            <Building size={20} className="text-estate-primary mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-estate-gray-dark">{t('property.buildingAmenities')}</h4>
              <p className="text-estate-gray-dark">{t('property.buildingDetails')}</p>
            </div>
          </div>
          <div className="flex items-start py-2">
            <Tree size={20} className="text-estate-primary mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-estate-gray-dark">{t('property.location')}</h4>
              <p className="text-estate-gray-dark">{t('property.locationDetails')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
