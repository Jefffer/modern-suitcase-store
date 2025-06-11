// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Crear el Contexto
const ThemeContext = createContext();

// 2. Crear el Proveedor del Contexto
export const ThemeProvider = ({ children }) => {
  // Estado para almacenar el tema. Leemos de localStorage para persistencia.
  // Usamos la preferencia del sistema como valor inicial si no hay nada guardado.
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme === 'dark') return 'dark';
    if (localStorage.theme === 'light') return 'light';
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  // Efecto para aplicar la clase 'dark' al <html> y guardar en localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // El valor que proveeremos a los componentes hijos
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Crear un Hook personalizado para usar el contexto fácilmente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};