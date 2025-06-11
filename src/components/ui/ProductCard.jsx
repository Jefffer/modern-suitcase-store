import React from 'react';

// Asumimos que product tiene: name, price, imageUrl, color
const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="group overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {product.color}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-display font-bold text-primary dark:text-primary-dark">
            ${product.price}
          </span>
          <button className="bg-slate-800 text-white dark:bg-sky-500 dark:text-slate-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary transition-colors">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;