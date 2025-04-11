
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-estate-gray-light py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold text-estate-primary mb-4">EstateVista</h4>
            <p className="text-estate-gray-dark mb-4">
              Finding your perfect home has never been easier. Browse our extensive catalog of properties.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 text-estate-gray-dark">About</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">About Us</Link></li>
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Careers</Link></li>
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Contact Us</Link></li>
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Our Agents</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 text-estate-gray-dark">Resources</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Blog</Link></li>
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Help Center</Link></li>
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Mortgage Calculator</Link></li>
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Market Reports</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 text-estate-gray-dark">Legal</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Privacy Policy</Link></li>
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Terms of Service</Link></li>
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">Fair Housing</Link></li>
              <li><Link to="/" className="text-estate-gray-dark hover:text-estate-primary">License Info</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-estate-gray-dark">
          <p>© {new Date().getFullYear()} EstateVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
