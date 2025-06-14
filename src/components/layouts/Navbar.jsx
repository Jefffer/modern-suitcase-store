import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart, FiSun, FiMoon, FiSearch, FiMapPin  } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const itemCount = 0;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const positionClasses = isScrolled ? "fixed top-0" : "absolute top-[40px]";

  const backgroundClasses = isScrolled
    ? "bg-white/90 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800"
    : "border-b border-transparent bg-transparent hover:bg-white/90 dark:hover:bg-slate-900/90 hover:backdrop-blur-sm hover:border-slate-200 dark:hover:border-slate-800";

  // --- LÓGICA DE COLOR PARA TEXTO Y LOGO ---
  let logoTextColor;
  if (isScrolled) {
    // En scroll, usamos los colores primarios de la marca.
    logoTextColor = "text-primary dark:text-primary-dark";
  } else {
    // Sobre la imagen, el logo es claro.
    logoTextColor = "text-slate-100";
    // SOLO en modo claro, al hacer hover, el logo vuelve a su color primario para contrastar con el fondo blanco.
    if (theme === "light") {
      logoTextColor += " group-hover:text-primary";
    }
  }

  // --- LÓGICA DE COLOR PARA ICONOS ---
  let iconColor;
  if (isScrolled) {
    // En scroll, los iconos toman el color del texto principal.
    iconColor = "text-slate-700 dark:text-slate-300";
  } else {
    // Sobre la imagen, los iconos son claros.
    iconColor = "text-slate-100";
    // SOLO en modo claro, al hacer hover, los iconos se oscurecen.
    if (theme === "light") {
      iconColor += " group-hover:text-slate-700";
    }
  }

  // Clases base para los enlaces, incluyendo el borde transparente para el efecto hover
  const navLinkBaseClasses = 'flex items-center border-b-4 text-base font-medium transition-colors duration-300 px-2';
  
  // Clases de color para enlaces normales
  let navLinkColor;
  if (isScrolled) {
    navLinkColor = 'border-transparent text-slate-600 hover:border-primary-light hover:text-primary dark:text-slate-300 dark:hover:border-primary-dark dark:hover:text-primary-dark';
  } else {
    navLinkColor = 'border-transparent text-slate-200 hover:border-sky-300 hover:text-white';
    if (theme === 'light') {
      navLinkColor += ' group-hover:text-slate-600 group-hover:hover:text-primary group-hover:hover:border-primary-light';
    }
  }
  
  // Clases de color para el enlace de "Ofertas" resaltado
  let offerLinkColor;
  if (isScrolled) {
    offerLinkColor = 'border-transparent text-amber-500 hover:border-amber-500 dark:text-amber-400 dark:hover:border-amber-400';
  } else {
    offerLinkColor = 'border-transparent text-amber-400 hover:border-amber-500 hover:text-amber-500';
    if (theme === 'light') {
      offerLinkColor += ' group-hover:text-amber-500 group-hover:hover:border-amber-500';
    }
  }

  return (
    // Añadimos la clase 'group' para habilitar 'group-hover' en los elementos hijos.
    <header
      className={`group w-full h-16 z-50 transition-all duration-300 ${positionClasses} ${backgroundClasses}`}
    >
      <nav className="w-full h-full px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-5 h-full">
          <Link to="/" className="flex items-center gap-3">
            {/* Logo circular */}
            <img 
              src={logo} 
              alt="Maletas Universal Logo" 
              className="h-11 w-11 rounded-full border-2 border-white/50 object-cover" 
            />
            {/* Nombre en dos líneas con la nueva fuente */}
            <div className="flex flex-col leading-tight">
              <span className={`font-display text-xl transition-colors duration-300 ${logoTextColor}`}>
                Maletas
              </span>
              <span className="font-display text-lg font-medium text-slate-400 -mt-1">
                Universal
              </span>
            </div>
          </Link>

          {/* Enlaces de Navegación. 'items-stretch' en el nav padre permite que los hijos ocupen toda la altura */}
          <div className="tracking-wider hidden md:flex items-center h-full gap-4">
            <Link to="/catalogo" className={`${navLinkBaseClasses} ${navLinkColor} h-full ml-4`}>Catálogo</Link>
            <Link to="/ofertas" className={`${navLinkBaseClasses} ${offerLinkColor} h-full`}>Ofertas 🔥</Link>
            <Link to="/nosotros" className={`${navLinkBaseClasses} ${navLinkColor} h-full`}>Nosotros</Link>
            <Link to="/sedes" className={`${navLinkBaseClasses} ${navLinkColor} h-full flex items-center gap-1.5`}>
              <FiMapPin size={16}/> Sedes
            </Link>
            <Link to="/contacto" className={`${navLinkBaseClasses} ${navLinkColor} h-full`}>Contacto</Link>
          </div>
        </div>

        {/* GRUPO DERECHO: Buscador e Iconos de Acción */}
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-slate-600 dark:text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Busca tu maleta..."
              className="w-full pl-10 pr-4 py-2 bg-slate-300/60 dark:bg-slate-800/80 border border-transparent 
                         rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark
                         transition-all duration-300"
            />
          </div>

          {/* Iconos de Acción */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300 ${iconColor}`}
              aria-label="Toggle theme"
              title="Cambiar tema"
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button
              className={`relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300 ${iconColor}`}
              title="Ver Carrito de compras"
            >
              <FiShoppingCart size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
