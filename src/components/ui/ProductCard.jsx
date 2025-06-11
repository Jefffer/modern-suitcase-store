import React from 'react';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, color } = product; // Asumiendo esta estructura de datos

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      <img src={imageUrl} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{color}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-primary dark:text-primary-dark">${price}</span>
          <button className="bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;