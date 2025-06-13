import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductList from '../components/home/ProductList';
import CategoryExplorer from '../components/home/CategoryExplorer';
import StoresBanner from '../components/home/StoresBanner';

const HomePage = () => {
  return (
    <div className='bg-slate-50 dark:bg-slate-900'>
      <HeroSection />
      <ProductList />
      <CategoryExplorer />
      <StoresBanner />
    </div>
  );
};

export default HomePage;