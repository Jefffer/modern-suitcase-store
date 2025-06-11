import React from 'react';
import HeroSection from '../components/home/HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      {/* Aquí irán las próximas secciones, como la lista de productos */}
      <div id="catalogo" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center">Próximamente: Nuestro Catálogo</h2>
      </div>
    </div>
  );
};

export default HomePage;