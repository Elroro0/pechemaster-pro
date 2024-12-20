import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/catalog', label: 'Techniques de pêche' },
    { path: '/fish-guide', label: 'Guide des poissons' },
    { path: '/fishing-spots', label: 'Spots de pêche' }
  ];

  return (
    <nav className="bg-nature-blue shadow-lg relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Menu Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Logo centré */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 text-white text-2xl font-bold flex items-center">
            <span className="text-3xl mr-2">🐟</span>
            PêcheMaster Pro
          </Link>

          {/* Espace vide pour maintenir l'alignement */}
          <div className="w-6"></div>
        </div>
      </div>

      {/* Menu déroulant */}
      <div
        className={`absolute top-full left-0 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="py-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
