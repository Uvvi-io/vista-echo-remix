
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const PropertyMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real application, this would be replaced with a proper map integration
    // like Google Maps, Mapbox, or Leaflet
    if (mapRef.current) {
      const mapContainer = mapRef.current;
      
      // Set placeholder map background with gradient
      mapContainer.style.background = 'linear-gradient(120deg, #e0e6f0 0%, #f3f5f8 100%)';
      
      // Add map marker placeholder
      const marker = document.createElement('div');
      marker.className = 'absolute transform -translate-x-1/2 -translate-y-1/2';
      marker.style.left = '50%';
      marker.style.top = '50%';
      
      const markerIcon = document.createElement('div');
      markerIcon.className = 'flex items-center justify-center w-10 h-10 bg-estate-primary rounded-full border-2 border-white text-white';
      markerIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
      
      marker.appendChild(markerIcon);
      mapContainer.appendChild(marker);
    }
  }, []);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 bg-estate-gray-light mb-6">
      <div className="p-4 bg-white border-b border-gray-200">
        <h3 className="text-lg font-bold text-estate-gray-dark flex items-center">
          <MapPin size={18} className="mr-2 text-estate-primary" />
          Location
        </h3>
      </div>
      <div 
        ref={mapRef} 
        className="relative h-[300px] w-full"
        aria-label="Map showing property location"
      >
        {/* Map will be initialized here by useEffect */}
        <div className="absolute inset-0 flex items-center justify-center text-estate-gray-dark">
          <p className="text-sm">1300 13th St NW APT 102, Washington, DC 20005</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
