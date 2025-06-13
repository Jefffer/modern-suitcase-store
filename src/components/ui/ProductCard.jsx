import React from 'react';

// Asumimos que product tiene: name, price, imageUrl, color
const ProductCard = ({ product }) => {
  if (!product) return null;

  // Lógica para determinar el estilo y texto de la etiqueta de tamaño
  let sizeTagClasses = 'absolute bottom-4 left-4 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider';
  let sizeText = '';
    // console.log('Tamaño del producto:', product.size);

  if (product.size) {
    console.log('Tamaño del producto:', product.size);
    if (product.size.includes('S')) {
      sizeTagClasses += ' bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100';
      sizeText = 'Cabina';
    } else if (product.size.includes('M')) {
      sizeTagClasses += ' bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-sky-100';
      sizeText = 'Bodega Mediana';
    } else if (product.size.includes('L')) {
      sizeTagClasses += ' bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100';
      sizeText = 'Bodega Grande';
    }
  }

  return (
    <div className="flex flex-col">
    <div className="relative group h-100 sm:h-120 w-full flex flex-col rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out bg-transparent">
      {/* Contenedor de imagen */}
      <div className="flex-1 flex items-center justify-center bg-white/70 dark:bg-white rounded-t-lg">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="max-h-80 w-auto object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      {/* 2. La nueva etiqueta de tamaño */}
        {sizeText && (
          <div className={sizeTagClasses}>
            {sizeText}
          </div>
        )}
      </div>
      {/* Nombre y precio */}
      <div className="mt-3 flex flex-col bg-transparent">
        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
          {product.name}
        </h3>
        <span className="text-2xl font-display font-bold text-primary dark:text-primary-dark">
          $ {Number(product.price).toLocaleString("es-CL")}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;