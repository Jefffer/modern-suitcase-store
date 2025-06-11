import React from 'react';
import HeroSection from '../components/home/HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      {/* Aquí irán las próximas secciones, como la lista de productos */}
      <div id="catalogo" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center">Próximamente: Nuestro Catálogo</h2>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
          Estamos preparando una selección increíble de maletas para ti.
        </p>
      </div>
    </div>
  );
};

export default HomePage;