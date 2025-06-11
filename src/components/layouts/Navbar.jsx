import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiSun, FiMoon, FiSearch } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

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
    ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800"
    : "border-b border-transparent bg-transparent hover:bg-white/90 dark:hover:bg-slate-900/90 hover:backdrop-blur-sm hover:border-slate-200 dark:hover:border-slate-800";

  // --- LÓGICA DE COLOR PARA TEXTO Y LOGO ---
  let logoColor;
  if (isScrolled) {
    // En scroll, usamos los colores primarios de la marca.
    logoColor = "text-primary dark:text-primary-dark";
  } else {
    // Sobre la imagen, el logo es claro.
    logoColor = "text-slate-100";
    // SOLO en modo claro, al hacer hover, el logo vuelve a su color primario para contrastar con el fondo blanco.
    if (theme === "light") {
      logoColor += " group-hover:text-primary";
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

  // --- LÓGICA DE ESTILO PARA LOS ENLACES DE NAVEGACIÓN ---
  let navLinkColor;
  if (isScrolled) {
    // Cuando hay scroll, los enlaces tienen color de texto normal y cambian a primario en hover
    navLinkColor =
      "text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-dark";
  } else {
    // Sobre la imagen, los enlaces son claros
    navLinkColor = "text-slate-200 hover:text-white";
    // Y solo en modo claro, se oscurecen cuando el fondo del navbar aparece
    if (theme === "light") {
      navLinkColor +=
        " group-hover:text-slate-600 group-hover:hover:text-primary";
    }
  }

  return (
    // Añadimos la clase 'group' para habilitar 'group-hover' en los elementos hijos.
    <header
      className={`group w-full z-50 transition-all duration-300 ${positionClasses} ${backgroundClasses}`}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-8 mx-auto py-3 flex justify-between items-center">
        <div className="flex items-center gap-10">
          {/* Logo con clases de color dinámicas */}
          <a
            href="/"
            className={`text-2xl font-bold shrink-0 transition-colors duration-300 ${logoColor}`}
          >
            Maletas Universal
          </a>

          {/* Enlaces de Navegación (ocultos en pantallas pequeñas) */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/catalogo"
              className={`text-sm font-medium transition-colors duration-300 ${navLinkColor}`}
            >
              Catálogo
            </a>
            <a
              href="/ofertas"
              className={`text-sm font-medium transition-colors duration-300 ${navLinkColor}`}
            >
              Ofertas
            </a>
            <a
              href="/nosotros"
              className={`text-sm font-medium transition-colors duration-300 ${navLinkColor}`}
            >
              Nosotros
            </a>
            <a
              href="/contacto"
              className={`text-sm font-medium transition-colors duration-300 ${navLinkColor}`}
            >
              Contacto
            </a>
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
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <button
              className={`relative p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300 ${iconColor}`}
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
