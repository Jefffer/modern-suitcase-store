import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-800 border-t dark:border-slate-700">
      <div className="container mx-auto px-4 py-6 text-center text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Maletas Universal. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Diseñado con  inspiración en el futuro del viaje.</p>
      </div>
    </footer>
  );
};

export default Footer;