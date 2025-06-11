import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      {/* Aquí irán las rutas y las páginas. Por ahora, un placeholder. */}
      <h1 className="text-3xl font-bold">Bienvenido a Maletas Universal</h1>
      <p>Contenido de la página principal...</p>
    </MainLayout>
  )
}

export default App
