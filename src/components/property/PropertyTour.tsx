
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Box, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

const PropertyTour = () => {
  const { t } = useLanguage();
  const [showTour, setShowTour] = useState(false);
  
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-3">
        <Box size={20} className="text-estate-primary" />
        <h3 className="text-xl font-bold text-estate-gray-dark">
          {t('property.3dTour')}
        </h3>
      </div>
      
      <Button 
        onClick={() => setShowTour(true)}
        className="w-full py-6 bg-estate-primary hover:bg-estate-primary/90 text-white font-medium text-lg"
      >
        <Video className="mr-2 h-5 w-5" />
        Matterport Virtual Tour
      </Button>

      <Dialog open={showTour} onOpenChange={setShowTour}>
        <DialogContent className="sm:max-w-[90vw] p-0">
          <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
            <iframe
              className="absolute inset-0 w-full h-full border-0"
              src="https://my.matterport.com/show/?m=zEWsxhZpGba"
              frameBorder="0"
              allowFullScreen
              title="3D Virtual Tour"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyTour;
