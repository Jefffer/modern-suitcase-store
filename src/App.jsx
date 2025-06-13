import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from './pages/HomePage';
import StoresPage from "./pages/StoresPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sedes" element={<StoresPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
