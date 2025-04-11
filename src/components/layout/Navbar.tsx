
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-estate-primary">{t('site.title')}</span>
        </Link>

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

      {/* Empty Mobile Menu container - keeping structure but removing content */}
      {isMobile && isMenuOpen && (
        <div className="bg-white border-t border-gray-200 py-3 px-4">
          {/* Mobile menu content removed */}
        </div>
      )}
    </header>
  );
};

export default Navbar;
