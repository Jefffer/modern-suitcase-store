import { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from './pages/HomePage';
import StoresPage from "./pages/StoresPage";
import ScrollToTop from "./components/utils/ScrollToTop";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sedes" element={<StoresPage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/producto/:slug" element={<ProductDetailPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
