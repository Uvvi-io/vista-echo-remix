
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Box, Video3d } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PropertyTour = () => {
  const { t } = useLanguage();
  const [showTour, setShowTour] = useState(false);
  
  return (
    <div className="mt-4 mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Box size={20} className="text-estate-primary" />
        <h3 className="text-xl font-bold text-estate-gray-dark">
          {t('property.3dTour')}
        </h3>
      </div>
      
      {!showTour ? (
        <Button 
          onClick={() => setShowTour(true)}
          className="w-full py-6 bg-gradient-to-r from-[#1A1F2C] to-[#6E59A5] hover:from-[#1A1F2C] hover:to-[#9b87f5] text-white font-medium text-lg"
        >
          <Video3d className="mr-2 h-5 w-5" />
          {t('property.viewMatterportTour')}
        </Button>
      ) : (
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
      )}
    </div>
  );
};

export default PropertyTour;
