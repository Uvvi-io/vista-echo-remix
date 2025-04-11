
import React from 'react';
import { Bed, Bath, Grid, MapPin, Ruler, History } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PropertyDetails = () => {
  return (
    <div className="mt-6">
      {/* Price and Address */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-estate-gray-dark">$749,000</h1>
        <div className="flex items-center mt-2 text-lg text-estate-gray-dark">
          <MapPin size={18} className="mr-1 flex-shrink-0" />
          <h2 className="font-medium">1300 13th St NW APT 102, Washington, DC 20005</h2>
        </div>
      </div>

      {/* Key Details Card */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <Bed size={24} className="text-estate-primary mb-1" />
              <span className="text-sm text-estate-gray-dark">Beds</span>
              <span className="font-bold text-lg text-estate-gray-dark">2</span>
            </div>
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <Bath size={24} className="text-estate-primary mb-1" />
              <span className="text-sm text-estate-gray-dark">Baths</span>
              <span className="font-bold text-lg text-estate-gray-dark">2</span>
            </div>
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <Ruler size={24} className="text-estate-primary mb-1" />
              <span className="text-sm text-estate-gray-dark">Sq Ft</span>
              <span className="font-bold text-lg text-estate-gray-dark">1,200</span>
            </div>
            <div className="flex flex-col items-center p-3 border rounded-lg">
              <History size={24} className="text-estate-primary mb-1" />
              <span className="text-sm text-estate-gray-dark">Year Built</span>
              <span className="font-bold text-lg text-estate-gray-dark">2005</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button className="flex-1 bg-estate-accent hover:bg-estate-accent/90 text-white">Schedule Tour</Button>
            <Button variant="outline" className="flex-1 border-estate-primary text-estate-primary hover:bg-estate-primary/10">Contact Agent</Button>
          </div>
        </CardContent>
      </Card>

      {/* Property Description */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-estate-gray-dark mb-3">About This Home</h3>
        <div className="text-estate-gray-dark space-y-4">
          <p>
            Beautiful, sun-drenched 2-bed, 2-bath condo in the heart of Logan Circle. This stunning unit features an open floor plan, gourmet kitchen with stainless steel appliances, hardwood floors throughout, and oversized windows that fill the space with natural light.
          </p>
          <p>
            The primary bedroom includes an en-suite bathroom and walk-in closet. The second bedroom is spacious and perfect for guests or a home office. Additional features include in-unit washer/dryer, central A/C, and secure building entry.
          </p>
          <p>
            Located steps away from shops, restaurants, and public transportation. Building amenities include a rooftop deck with city views, fitness center, and bike storage.
          </p>
        </div>
      </div>

      {/* Property Features */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-estate-gray-dark mb-3">Home Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <div className="flex items-start py-2">
            <Grid size={20} className="text-estate-primary mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-estate-gray-dark">Interior Features</h4>
              <p className="text-estate-gray-dark">Hardwood floors, central air, in-unit laundry</p>
            </div>
          </div>
          <div className="flex items-start py-2">
            <Grid size={20} className="text-estate-primary mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-estate-gray-dark">Kitchen</h4>
              <p className="text-estate-gray-dark">Stainless steel appliances, granite countertops</p>
            </div>
          </div>
          <div className="flex items-start py-2">
            <Grid size={20} className="text-estate-primary mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-estate-gray-dark">Building Amenities</h4>
              <p className="text-estate-gray-dark">Elevator, fitness center, rooftop deck</p>
            </div>
          </div>
          <div className="flex items-start py-2">
            <Grid size={20} className="text-estate-primary mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-estate-gray-dark">Location</h4>
              <p className="text-estate-gray-dark">Near Metro, restaurants, shopping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
