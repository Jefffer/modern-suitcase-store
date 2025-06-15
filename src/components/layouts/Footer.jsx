import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import logo from '../../assets/images/logo2.png'; // Reutilizamos el logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Columna 1: Logo e Información de la Marca */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Maletas Universal Logo" className="h-12 w-12 rounded-full object-cover" />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-2xl font-bold text-primary dark:text-primary-dark">
                  Maletas
                </span>
                <span className="font-display text-xl font-medium text-slate-500 -mt-1">
                  Universal
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Tu próxima aventura empieza con la maleta perfecta. Calidad y diseño en cada viaje.
            </p>
          </div>
          
          {/* Columna 2: Enlaces de Navegación */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-slate-800 dark:text-white mb-4">Navegación</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
              <a href="/catalogo" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Catálogo</a>
              <a href="/ofertas" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Ofertas</a>
              <a href="/giftcard" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Giftcard</a>
              <a href="/sedes" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Sedes</a>
              <a href="/contacto" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Contacto</a>
              <a href="/nosotros" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Nosotros</a>
            </div>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-slate-800 dark:text-white mb-4">Síguenos en nuestras redes</h3>
            <div className="flex items-center gap-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" 
                 className="p-3 bg-slate-200/50 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:text-white transition-all duration-300 hover:scale-110">
                <FiInstagram size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="p-3 bg-slate-200/50 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-110">
                <FiFacebook size={22} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria y Copyright */}
        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {currentYear} Maletas Universal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;