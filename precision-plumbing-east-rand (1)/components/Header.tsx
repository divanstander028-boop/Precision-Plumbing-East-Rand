import React, { useState } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, PHONE_DISPLAY } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Areas', path: '/areas' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600";
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-800 leading-tight">Precision</span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">PLUMBING EAST RAND</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${isActive(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href={`tel:${PHONE_DISPLAY}`} 
              className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-100 transition"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-slate-700">{PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-4 rounded-md text-base font-medium border-b border-slate-50 ${isActive(item.path)}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};