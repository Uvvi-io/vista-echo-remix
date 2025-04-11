
import React from 'react';
import { ChevronLeft, ChevronRight, Heart, MapPin, Bed, Bath, Ruler } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample similar properties data
const similarProperties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 720000,
    address: '1240 14th St NW #302, Washington, DC',
    beds: 2,
    baths: 2,
    sqft: 1100,
    favorite: false
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 769000,
    address: '1401 Q St NW #102, Washington, DC',
    beds: 2,
    baths: 2.5,
    sqft: 1350,
    favorite: true
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 699000,
    address: '1125 12th St NW #7A, Washington, DC',
    beds: 1,
    baths: 1.5,
    sqft: 985,
    favorite: false
  }
];

const PropertyCard = ({ property }: { property: typeof similarProperties[0] }) => {
  const [isFavorite, setIsFavorite] = React.useState(property.favorite);

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img
          src={property.image}
          alt={`Property at ${property.address}`}
          className="w-full h-48 object-cover"
        />
        <Button
          variant="outline"
          size="icon"
          className={`absolute top-2 right-2 rounded-full ${
            isFavorite ? 'bg-estate-accent text-white' : 'bg-white/80 text-estate-gray-dark hover:bg-white'
          }`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </Button>
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-xl text-estate-gray-dark">${property.price.toLocaleString()}</h3>
        <div className="flex items-center text-sm text-estate-gray-dark mt-1 mb-2">
          <MapPin size={14} className="mr-1 shrink-0" />
          <span className="truncate">{property.address}</span>
        </div>
        <div className="flex justify-between mt-auto pt-3 border-t border-gray-200">
          <div className="flex items-center text-sm text-estate-gray-dark">
            <Bed size={14} className="mr-1" />
            <span>{property.beds}</span>
          </div>
          <div className="flex items-center text-sm text-estate-gray-dark">
            <Bath size={14} className="mr-1" />
            <span>{property.baths}</span>
          </div>
          <div className="flex items-center text-sm text-estate-gray-dark">
            <Ruler size={14} className="mr-1" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SimilarProperties = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-estate-gray-dark">Similar Properties</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" className="rounded-full border-estate-primary text-estate-primary">
            <ChevronLeft size={18} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-estate-primary text-estate-primary">
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {similarProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;
