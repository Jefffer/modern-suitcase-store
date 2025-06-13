import React from "react";
import { FiMapPin, FiFacebook, FiInstagram } from "react-icons/fi";
import Marquee from "react-fast-marquee";

const TopBar = () => {
  // El mensaje ahora no necesita el duplicado manual, aunque ayuda para un espaciado consistente.
  const message =
    "Selecciona tu sede más cercana para ver el catálogo ・ ¡Realizamos envíos en menos de 12 horas después de tu pedido ・ Envío gratis a partir de $200.000 ・ Ofrecemos recogida en bodega completamente gratis ・ Servicio Contraentrega";

  return (
    <div className="bg-emerald-700 dark:bg-emerald-900 text-white transition-colors duration-300 h-[40px] flex items-center justify-between gap-6">
      {/* GRUPO IZQUIERDO: Iconos de redes sociales */}
      <div className="hidden sm:flex items-center gap-3 shrink-0 pl-4 sm:pl-6 lg:pl-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-emerald-200 hover:text-pink-400 hover:scale-160 transition-transform duration-300">
            <FiInstagram size={18} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-emerald-200 hover:text-blue-400 hover:scale-160 transition-transform duration-300">
            <FiFacebook size={18} />
          </a>
      </div>

      {/* CENTRO: Banner en movimiento */}
      <div className="flex-1 overflow-hidden">
        {/* 2. Usa el componente Marquee en lugar de divs con clases de animación */}
        <Marquee speed={35} gradient={false} pauseOnHover={true} >
          {/* El componente se encarga de clonar el contenido para un bucle perfecto */}
          <span className="text-sm font-medium text-emerald-100 mx-8">
            {message}
          </span>
        </Marquee>
      </div>

      {/* Parte Derecha: Enlaces de selección de sede */}
      <div className="hidden sm:flex items-center gap-4 text-sm font-medium shrink-0 pr-4 sm:pr-6 lg:pr-8">
        <span className="text-emerald-200 hidden lg:flex items-center gap-2">
          <FiMapPin /> Sedes:
        </span>
        <a
          href="/sede/bogota"
          className="text-white font-semibold hover:text-emerald-200 transition-colors"
        >
          Bogotá
        </a>
        |
        <a
          href="/sede/medellin"
          className="text-white font-semibold hover:text-emerald-200 transition-colors"
        >
          Medellín
        </a>
        |
        <a
          href="/sede/bucaramanga"
          className="text-white font-semibold hover:text-emerald-200 transition-colors"
        >
          Bucaramanga
        </a>
      </div>
    </div>
  );
};

export default TopBar;
