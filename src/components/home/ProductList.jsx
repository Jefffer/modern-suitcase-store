import React, { useState, useEffect } from 'react';
import sanityClient from '../../sanityClient'; // Importamos nuestro cliente
import ProductCard from '../ui/ProductCard';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // Usamos una consulta GROQ para traer los productos
    sanityClient.fetch(`*[_type == "product"]{
      _id,
      name,
      slug,
      price,
      color,
      size,
      "imageUrl": images[0].asset->url // Traemos la URL de la primera imagen
    }`).then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Esto hace que los hijos aparezcan uno tras otro
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
  };

  if (!products) {
    return <div className="text-center py-20">Cargando productos...</div>;
  }

  return (
    <section id="catalogo" className="bg-slate-50 dark:bg-slate-900 py-20 sm:py-28">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-slate-800 dark:text-white sm:text-5xl">
            Nuestra Colección
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Explora una selección de nuestras maletas más deseadas, diseñadas para el viajero moderno.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* .slice(0, 8) para mostrar solo los primeros 8 productos */}
          {products.slice(0, 4).map((product) => (
            <motion.div key={product._id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
            <a 
              href="/catalogo"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold text-base px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50"
            >
              Ver todo el catálogo
              <FiArrowRight />
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProductList;