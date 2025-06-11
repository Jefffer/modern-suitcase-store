import React from 'react';
import TopBar from './TopBar'; 
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
       <TopBar />
      <Navbar />
      <main className="flex-grow container mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;