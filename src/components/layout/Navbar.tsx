
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-estate-primary">EstateVista</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <div className="flex-1 mx-12">
              <div className="relative max-w-md mx-auto">
                <Input 
                  type="text" 
                  placeholder="Search for properties..." 
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/" className="text-estate-gray-dark hover:text-estate-primary transition-colors">Buy</Link>
              <Link to="/" className="text-estate-gray-dark hover:text-estate-primary transition-colors">Rent</Link>
              <Link to="/" className="text-estate-gray-dark hover:text-estate-primary transition-colors">Sell</Link>
              <Link to="/" className="text-estate-gray-dark hover:text-estate-primary transition-colors">Agents</Link>
              <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white">
                Sign In <User className="ml-2" size={16} />
              </Button>
            </div>
          </>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-estate-gray-dark p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="bg-white border-t border-gray-200 py-3 px-4">
          <div className="relative mb-4">
            <Input 
              type="text" 
              placeholder="Search for properties..." 
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-estate-gray-dark hover:text-estate-primary transition-colors py-2">Buy</Link>
            <Link to="/" className="text-estate-gray-dark hover:text-estate-primary transition-colors py-2">Rent</Link>
            <Link to="/" className="text-estate-gray-dark hover:text-estate-primary transition-colors py-2">Sell</Link>
            <Link to="/" className="text-estate-gray-dark hover:text-estate-primary transition-colors py-2">Agents</Link>
            <Button className="bg-estate-primary hover:bg-estate-primary/90 text-white mt-2">
              Sign In <User className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
