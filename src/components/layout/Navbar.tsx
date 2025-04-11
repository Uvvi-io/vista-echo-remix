
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Bed, MapPin, User, Info } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'property-details', icon: Bed, label: t('nav.propertyDetails') },
    { id: 'contact-agent', icon: User, label: t('nav.contactAgent') },
    { id: 'property-map', icon: MapPin, label: t('nav.location') },
    { id: 'neighborhood-info', icon: Info, label: t('nav.neighborhood') }
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-estate-primary">{t('site.title')}</span>
        </Link>

        {/* Navigation Links - only shown on desktop */}
        {!isMobile && (
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center text-estate-gray-dark hover:text-estate-primary transition-colors"
              >
                <item.icon size={16} className="mr-1" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Language Selector - positioned on the right */}
        <div className="flex items-center">
          <LanguageSelector />
          
          {/* Mobile Menu Button - only showing on mobile */}
          {isMobile && (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-estate-gray-dark p-2 ml-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu container */}
      {isMobile && isMenuOpen && (
        <div className="bg-white border-t border-gray-200 py-3 px-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center w-full py-2 text-estate-gray-dark hover:text-estate-primary transition-colors"
            >
              <item.icon size={18} className="mr-2" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
