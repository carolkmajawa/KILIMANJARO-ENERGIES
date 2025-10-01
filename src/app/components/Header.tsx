"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked"); 
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm relative z-40">
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-600 rounded-tl-full opacity-20"></div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-44 h-16 overflow-hidden">
            <Image
              src="/image/kililogo.png"
              alt="Kilimanjaro Energies Logo"
              width={176}
              height={64}
              className="object-contain"
              priority
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            How it works
          </Link>
          <Link 
            href="#" 
            className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            Testimonies
          </Link>
          <Link 
            href="/services" 
            className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            Why choose us
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 font-medium hover:text-orange-500 transition-colors"
          >
            Contacts Info
          </Link>
        </nav>
        
        <div className="md:hidden relative z-50">
          <button 
            className="text-gray-700 hover:text-orange-500 focus:outline-none p-2 relative z-50 bg-transparent border-none cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
            style={{ zIndex: 50 }}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
          <nav className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-3 text-orange-500 font-medium hover:bg-orange-50 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                How it works
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Testimonies
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Why choose us
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-gray-700 font-medium hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Contacts Info
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;