
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Box, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

interface PropertyTourProps {
  onClose: () => void;
}

const PropertyTour = ({ onClose }: PropertyTourProps) => {
  const { t } = useLanguage();
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
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
  );
};

export default PropertyTour;
