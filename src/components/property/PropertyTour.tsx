
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Box } from 'lucide-react';

const PropertyTour = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mt-4 mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Box size={20} className="text-estate-primary" />
        <h3 className="text-xl font-bold text-estate-gray-dark">
          {t('property.3dTour')}
        </h3>
      </div>
      
      <Card className="w-full overflow-hidden">
        <CardContent className="p-0">
          <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://my.matterport.com/show/?m=zEWsxhZpGba"
              frameBorder="0"
              allowFullScreen
              title="3D Virtual Tour"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyTour;
