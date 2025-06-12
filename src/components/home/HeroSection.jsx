// src/components/home/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from '../../assets/images/hero.jpg';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { LiaLongArrowAltDownSolid } from "react-icons/lia";


const HeroSection = () => {
    // Handler para hacer scroll suave al siguiente contenido
  const handleScrollDown = () => {
    const hero = document.getElementById('hero-section');
    if (hero) {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      window.scrollTo({
        top: heroBottom,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
    id="hero-section" 
      // Cambiamos a 'h-screen' para que ocupe toda la altura de la ventana
      className="relative h-screen min-h-[600px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Capa de superposición oscura para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido del Hero: Añadimos padding-top para compensar el header */}
      <div className="relative z-10 text-center p-4 pt-24 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Tu Próxima Aventura Empieza Aquí
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
          Descubre maletas diseñadas para durar, con el estilo que te define. Calidad y diseño en cada viaje.
        </p>
        <a 
          href="#catalogo"
          className="mt-8 inline-flex items-center gap-2 bg-primary-light hover:bg-primary text-white font-bold text-lg px-8 py-3 rounded-full transition-transform duration-300 hover:scale-105"
        >
          Ver Catálogo
          <FiArrowRight />
        </a>
         {/* Flecha animada */}
        <div className="flex justify-center mt-20">
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: [0.68, -0.55, 0.27, 1.55] }}
          >
            <button
              onClick={handleScrollDown}
              aria-label="Desplázate hacia abajo"
              className="focus:outline-none"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <LiaLongArrowAltDownSolid 
                size={38} 
                className="text-white"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;