import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extrae el pathname de la ubicación actual
  const { pathname } = useLocation();

  // Este efecto se ejecuta cada vez que el 'pathname' cambia
  useEffect(() => {
    // Hace scroll de la ventana a la posición (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente no renderiza nada en el DOM
  return null;
}

export default ScrollToTop;