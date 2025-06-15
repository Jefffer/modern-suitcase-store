import React, { useState, useEffect, useCallback } from 'react';
import sanityClient from '../sanityClient';
import ProductCard from '../components/ui/ProductCard';
import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

const PRODUCTS_PER_PAGE = 8;

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    // Consulta GROQ para paginación por ID
    // Traemos los siguientes N productos ordenados por nombre
    const query = `*[_type == "product" && _id > $lastId] | order(name asc)[0...${PRODUCTS_PER_PAGE}] {
      _id,
      name,
      "slug": slug.current,
      price,
      size,
      "imageUrl": images[0].asset->url
    }`;
    const params = { lastId: lastId || '' };

    const newProducts = await sanityClient.fetch(query, params);

    if (newProducts.length > 0) {
      setProducts(prev => [...prev, ...newProducts]);
      setLastId(newProducts[newProducts.length - 1]._id);
    } 
    
    if (newProducts.length < PRODUCTS_PER_PAGE) {
      setHasMore(false);
    }

    setLoading(false);
  }, [loading, hasMore, lastId]);

  // Carga inicial
  useEffect(() => {
    fetchProducts();
  }, []); // Solo se ejecuta una vez al montar el componente

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <header className="pt-24 pb-12 text-center">
        <motion.h1 
          className="text-4xl font-display font-extrabold text-slate-800 dark:text-white sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestra Colección Completa
        </motion.h1>
        {/* <motion.p 
          className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explora cada diseño, encuentra tu color y prepárate para tu próximo destino.
        </motion.p> */}
      </header>

      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div key={product._id} variants={itemVariants}>
              {/* ProductCard ahora será un link */}
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={fetchProducts}
              disabled={loading}
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white font-bold text-base px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50 disabled:bg-slate-400 disabled:scale-100"
            >
              {loading ? (
                <>
                  <FiLoader className="animate-spin" />
                  Cargando...
                </>
              ) : (
                'Cargar Más Maletas'
              )}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CatalogPage;