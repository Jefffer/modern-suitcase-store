// src/components/layouts/Navbar.jsx
import React from 'react';
import { FiShoppingCart, FiSun, FiMoon, FiSearch } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const itemCount = 0; // Placeholder

  return (
    <header className="shadow-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
        {/* Logo y Sedes */}
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold text-primary dark:text-primary-dark shrink-0">
            Maletas Universal
          </h1>
          <div className="hidden lg:flex gap-6 items-center">
            <a href="/sede-bogota" className="text-sm font-medium hover:text-primary transition-colors">Bogotá</a>
            <a href="/sede-medellin" className="text-sm font-medium hover:text-primary transition-colors">Medellín</a>
            <a href="/sede-cali" className="text-sm font-medium hover:text-primary transition-colors">Cali</a>
          </div>
        </div>

        {/* Buscador Central */}
        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar maleta por color, tamaño..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-transparent 
                         rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                         transition-all duration-300"
            />
          </div>
        </div>

        {/* Iconos de Acción */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <FiShoppingCart size={22} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;