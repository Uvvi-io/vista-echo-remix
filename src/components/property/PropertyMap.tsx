
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Define types for the Google Maps window object
declare global {
  interface Window {
    initMap: () => void;
    google?: {
      maps: any;
    };
  }
}

const PropertyMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  useEffect(() => {
    // Function to load the Google Maps script
    const loadGoogleMapsScript = () => {
      // Check if script is already loaded
      if (window.google) {
        initializeMap();
        return;
      }
      
      // Create the script element
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Define the callback function
      window.initMap = initializeMap;
      
      // Append the script to the DOM
      document.head.appendChild(script);
    };
    
    // Function to initialize the map
    const initializeMap = () => {
      if (mapRef.current && window.google) {
        // The property coordinates (example: Washington DC)
        const propertyLocation = { lat: 38.907192, lng: -77.036873 };
        
        // Create a new map
        const map = new window.google.maps.Map(mapRef.current, {
          center: propertyLocation,
          zoom: 15,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
        });
        
        // Add a marker for the property
        new window.google.maps.Marker({
          position: propertyLocation,
          map,
          title: '1300 13th St NW APT 102, Washington, DC 20005',
          animation: window.google.maps.Animation.DROP,
        });
      }
    };
    
    // Load the Google Maps script
    loadGoogleMapsScript();
    
    // Cleanup function
    return () => {
      // Remove the global callback when the component unmounts
      window.initMap = () => {};
    };
  }, []);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-estate-gray-light mb-6">
      <div className="p-4 bg-white border-b border-gray-200">
        <h3 className="text-lg font-bold text-estate-gray-dark flex items-center">
          <MapPin size={18} className="mr-2 text-estate-primary" />
          {t('property.location')}
        </h3>
      </div>
      <div 
        ref={mapRef} 
        className="relative h-[300px] w-full"
        aria-label="Map showing property location"
      >
        {/* Google Map will be loaded here */}
        <div className="absolute inset-0 flex items-center justify-center text-estate-gray-dark">
          <p className="text-sm">{t('property.address')}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
