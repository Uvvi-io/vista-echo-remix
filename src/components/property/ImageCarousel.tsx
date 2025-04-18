import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image, X, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import PropertyTour from './PropertyTour';

// Sample images for the property
const propertyImages = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
];

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [showTour, setShowTour] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
        {/* Main Image */}
        <img
          src={propertyImages[currentImage]}
          alt={`Property image ${currentImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            onClick={prevImage}
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 text-estate-gray-dark hover:bg-white"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            onClick={nextImage}
            variant="outline"
            size="icon"
            className="rounded-full bg-white/80 text-estate-gray-dark hover:bg-white"
          >
            <ChevronRight size={24} />
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {propertyImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentImage === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>

        {/* Top buttons container */}
        <div className="absolute top-4 flex justify-between w-full px-4">
          {/* Image count button */}
          <Button
            variant="outline"
            size="sm"
            className="bg-white/80 hover:bg-white text-estate-gray-dark rounded-md"
            onClick={() => setShowFullscreen(true)}
          >
            <Image className="mr-2" size={16} />
            {currentImage + 1}/{propertyImages.length}
          </Button>

          {/* 3D Tour button */}
          <Button
            variant="outline"
            size="sm"
            className="bg-white/80 hover:bg-white text-estate-gray-dark rounded-md"
            onClick={() => setShowTour(true)}
          >
            <Box className="mr-2" size={16} />
            3D Tour
          </Button>
        </div>
      </div>

      {/* Fullscreen Image Dialog */}
      <Dialog open={showFullscreen} onOpenChange={setShowFullscreen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-0">
          <div className="relative">
            <img
              src={propertyImages[currentImage]}
              alt={`Property image ${currentImage + 1}`}
              className="w-full h-full object-contain"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white"
              onClick={() => setShowFullscreen(false)}
            >
              <X size={24} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 3D Tour Dialog */}
      {showTour && <PropertyTour onClose={() => setShowTour(false)} />}
    </>
  );
};

export default ImageCarousel;
