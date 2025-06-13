import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductList from '../components/home/ProductList';
import CategoryExplorer from '../components/home/CategoryExplorer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProductList />
      <CategoryExplorer />
    </div>
  );
};

export default HomePage;