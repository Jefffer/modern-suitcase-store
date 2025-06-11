// src/components/layouts/Navbar.jsx
import React from 'react';
// Importamos los iconos y nuestro hook personalizado
import { FiShoppingCart, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  // Usamos el hook para obtener el tema actual y la función para cambiarlo
  const { theme, toggleTheme } = useTheme();
  const itemCount = 0; // Placeholder del carrito

  return (
    <header className="shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Maletas Universal
        </h1>
        <div className="hidden md:flex gap-6 items-center">
          <a href="/sede-bogota" className="hover:text-blue-500 transition-colors">Bogotá</a>
          <a href="/sede-medellin" className="hover:text-blue-500 transition-colors">Medellín</a>
          <a href="/sede-cali" className="hover:text-blue-500 transition-colors">Cali</a>
        </div>
        <div className="flex items-center gap-4">
          {/* Botón para cambiar el tema */}
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
              <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
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