import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_DISPLAY, EMAIL_ADDRESS, COMPANY_ADDRESS } from '../constants';
import { Wrench } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-xl text-white">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Respectable service where we become overseers of your property. 
              Putting our heart and soul into every job.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link to="/areas" className="hover:text-blue-400 transition">Service Areas</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-slate-400">
              <li>{COMPANY_ADDRESS}</li>
              <li><a href={`tel:${PHONE_DISPLAY}`} className="hover:text-white">{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white">{EMAIL_ADDRESS}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};