import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';

const MainLayout = ({ children }) => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Si el scroll es mayor a 50px, cambiamos el estado
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   // Agregamos el listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Limpiamos el listener cuando el componente se desmonta
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
      <TopBar />
      {/* Pasamos el estado 'isScrolled' al Navbar */}
      <Navbar/>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;