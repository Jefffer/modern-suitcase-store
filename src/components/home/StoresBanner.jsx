// src/components/home/StoresBanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación
import storesBackground from '../../assets/images/category15.jpg';

const StoresBanner = () => {
  return (
    // El Link envuelve todo, para que cualquier click navegue a la página /sedes
    <Link to="/sedes" className="block pb-10 group">
      <motion.div 
        className="relative w-full mx-auto h-[500px] flex items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} // Una curva de ease más dramática
      >
        {/* LADO IZQUIERDO: CONTENIDO DE TEXTO */}
        <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-end text-right bg-sky-200 dark:bg-sky-800 p-8 lg:p-12">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight">
            Un Espacio <span className='text-sky-600 dark:text-sky-400'> Universal </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-md">
            Visítanos, siente la calidad de nuestros materiales y déjate asesorar por expertos.
          </p>

          {/* Botón con el nuevo efecto de hover */}
          <div className="relative mt-8 text-lg font-semibold border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark w-fit px-8 py-3 rounded-full transition-colors duration-300 ease-in-out
                          group-hover:text-white dark:group-hover:text-slate-900">
            Encuentra tu tienda
            {/* El fondo del botón que aparece en hover */}
            <div className="absolute inset-0 bg-primary dark:bg-primary-dark rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left -z-10" />
          </div>
        </div>
        
        {/* LADO DERECHO: IMAGEN CON EFECTO CREATIVO */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full overflow-hidden">
          {/* Capa de degradado para fusionar con el fondo */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/50 to-transparent dark:from-slate-900 dark:via-slate-900/50 dark:to-transparent z-10 md:hidden" />
          
          <motion.img
            src={storesBackground}
            alt="Interior de una tienda de maletas"
            className="w-full h-full object-cover"
            style={{ scale: 1.4, x: "-20%" }} // Empezamos con un ligero zoom
            whileHover={{ 
              scale: 1.2, // Al hacer hover, el zoom se reduce ligeramente (efecto inverso)
              x: "0%",      // y la imagen se desplaza
              transition: { duration: 0.7, ease: "easeOut" }
            }}
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default StoresBanner;