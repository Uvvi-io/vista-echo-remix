
import React from 'react';
import { Bed, Bath, MapPin, Ruler, History, Coffee, Building, Trees } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyTour from './PropertyTour';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

const PropertyDetails = () => {
  const { t } = useLanguage();

  // WhatsApp deeplink for scheduling a tour
  const openWhatsAppSchedule = () => {
    // Placeholder number - to be replaced with actual agent number
    const phoneNumber = "1234567890";
    const message = encodeURIComponent(`Hello, I would like to schedule a tour for the property at ${t('property.address')}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // WhatsApp deeplink for contacting the agent
  const openWhatsAppContact = () => {
    // Placeholder number - to be replaced with actual agent number
    const phoneNumber = "1234567890";
    const message = encodeURIComponent(`Hello, I'm interested in the property at ${t('property.address')}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

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
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button 
              className="flex-1 bg-estate-accent hover:bg-estate-accent/90 text-white"
              onClick={openWhatsAppSchedule}
            >
              {t('property.scheduleTour')}
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-estate-primary text-estate-primary hover:bg-estate-primary/10"
              onClick={openWhatsAppContact}
            >
              {t('property.contactAgent')}
            </Button>
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

      {/* Property Features - Tabbed & Collapsible */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-estate-gray-dark mb-3">{t('property.homeFeatures')}</h3>
        
        {/* Tabs for larger screens */}
        <div className="hidden md:block">
          <Tabs defaultValue="interior" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="interior" className="text-estate-gray-dark">
                <Coffee size={18} className="mr-2 text-estate-primary" />
                {t('property.interiorFeatures')}
              </TabsTrigger>
              <TabsTrigger value="kitchen" className="text-estate-gray-dark">
                <Building size={18} className="mr-2 text-estate-primary" />
                {t('property.kitchen')}
              </TabsTrigger>
              <TabsTrigger value="building" className="text-estate-gray-dark">
                <Building size={18} className="mr-2 text-estate-primary" />
                {t('property.buildingAmenities')}
              </TabsTrigger>
              <TabsTrigger value="location" className="text-estate-gray-dark">
                <Trees size={18} className="mr-2 text-estate-primary" />
                {t('property.location')}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="interior" className="p-4 bg-white rounded-md border">
              <p className="text-estate-gray-dark">{t('property.interiorDetails')}</p>
            </TabsContent>
            
            <TabsContent value="kitchen" className="p-4 bg-white rounded-md border">
              <p className="text-estate-gray-dark">{t('property.kitchenDetails')}</p>
            </TabsContent>
            
            <TabsContent value="building" className="p-4 bg-white rounded-md border">
              <p className="text-estate-gray-dark">{t('property.buildingDetails')}</p>
            </TabsContent>
            
            <TabsContent value="location" className="p-4 bg-white rounded-md border">
              <p className="text-estate-gray-dark">{t('property.locationDetails')}</p>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Collapsible sections for mobile */}
        <div className="md:hidden space-y-3">
          <Collapsible className="border rounded-md overflow-hidden">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
              <div className="flex items-center">
                <Coffee size={18} className="mr-2 text-estate-primary" />
                <span className="font-semibold text-estate-gray-dark">{t('property.interiorFeatures')}</span>
              </div>
              <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-3 bg-white">
              <p className="text-estate-gray-dark">{t('property.interiorDetails')}</p>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="border rounded-md overflow-hidden">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
              <div className="flex items-center">
                <Building size={18} className="mr-2 text-estate-primary" />
                <span className="font-semibold text-estate-gray-dark">{t('property.kitchen')}</span>
              </div>
              <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-3 bg-white">
              <p className="text-estate-gray-dark">{t('property.kitchenDetails')}</p>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="border rounded-md overflow-hidden">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
              <div className="flex items-center">
                <Building size={18} className="mr-2 text-estate-primary" />
                <span className="font-semibold text-estate-gray-dark">{t('property.buildingAmenities')}</span>
              </div>
              <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-3 bg-white">
              <p className="text-estate-gray-dark">{t('property.buildingDetails')}</p>
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="border rounded-md overflow-hidden">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-estate-gray-light hover:bg-estate-gray-light/80 transition-colors">
              <div className="flex items-center">
                <Trees size={18} className="mr-2 text-estate-primary" />
                <span className="font-semibold text-estate-gray-dark">{t('property.location')}</span>
              </div>
              <ChevronDown className="h-5 w-5 text-estate-gray-dark transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-3 bg-white">
              <p className="text-estate-gray-dark">{t('property.locationDetails')}</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
