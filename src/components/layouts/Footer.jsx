import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Maletas Universal. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">Diseñado con  inspiración en el futuro del viaje.</p>
      </div>
    </footer>
  );
};

export default Footer;