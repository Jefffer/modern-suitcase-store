import React from 'react';
import { FiMapPin } from 'react-icons/fi'; // Cambiamos el ícono a uno más apropiado para sedes

const TopBar = () => {
  return (
    <div className="bg-primary dark:bg-gray-800 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center sm:justify-between">
        
        {/* Mensaje de bienvenida con el nuevo ícono */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-sky-100 dark:text-gray-400">
          <FiMapPin />
          <span>Nuestras Sedes</span>
        </div>

        {/* Enlaces de las Sedes (ACTUALIZADO) */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="/sede/bogota" className="text-white hover:text-sky-200 dark:hover:text-white transition-colors">
            Bogotá
          </a>
          <a href="/sede/medellin" className="text-white hover:text-sky-200 dark:hover:text-white transition-colors">
            Medellín
          </a>
          <a href="/sede/bucaramanga" className="text-white hover:text-sky-200 dark:hover:text-white transition-colors">
            Bucaramanga
          </a>
        </div>

        {/* Espacio vacío para balancear en pantallas grandes */}
        <div className="hidden sm:flex" />
      </div>
    </div>
  );
};

export default TopBar;