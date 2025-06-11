// src/components/home/HeroSection.jsx
import React from 'react';
import HeroBackground from '../../assets/images/hero.jpg';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[calc(100vh-120px)] min-h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Capa de superposición oscura para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center p-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Tu Próxima Aventura Empieza Aquí
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Descubre maletas diseñadas para durar, con el estilo que te define. Calidad y diseño en cada viaje.
        </p>
        <a 
          href="#catalogo" // En el futuro, esto puede ser un enlace a la sección de productos
          className="mt-8 inline-flex items-center gap-2 bg-primary-light hover:bg-primary text-white font-bold text-lg px-8 py-3 rounded-full transition-transform duration-300 hover:scale-105"
        >
          Ver Catálogo
          <FiArrowRight />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;