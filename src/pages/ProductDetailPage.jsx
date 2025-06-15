import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../sanityClient';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiChevronDown, FiBox, FiFeather, FiDroplet, FiZap } from 'react-icons/fi';

// Componente para las secciones plegables
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border-b border-slate-200 dark:border-slate-700">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-4 text-left">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <FiChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-slate-600 dark:text-slate-300 prose prose-sm dark:prose-invert">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const query = `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      price,
      description,
      size,
      weight,
      color,
      materials,
      "images": images[].asset->url
    }`;
    sanityClient.fetch(query, { slug })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando producto...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Producto no encontrado.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Columna Izquierda: Galería de Imágenes */}
          <div className="sticky top-24 flex flex-col gap-4">
            <div className="relative w-full h-[60vh] rounded-2xl bg-white shadow-lg overflow-hidden">
              <AnimatePresence>
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={`${product.name} - vista ${selectedImage + 1}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </AnimatePresence>
            </div>
            <div className="flex gap-3 justify-center">
              {product.images.map((imgUrl, index) => (
                <div 
                  key={index} 
                  className={`w-20 h-20 rounded-lg cursor-pointer overflow-hidden transition-all duration-300 ${selectedImage === index ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-900' : 'opacity-60 hover:opacity-100'}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={imgUrl} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Detalles del Producto */}
          <div className="py-8">
            <motion.h1 
              className="text-4xl lg:text-3xl font-display font-bold text-slate-800 dark:text-white leading-tight tracking-wide"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            >
              {product.name}
            </motion.h1>
            
            <motion.p 
              className="mt-4 text-4xl font-display font-bold text-primary dark:text-primary-dark"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              $ {Number(product.price).toLocaleString("es-CL")}
            </motion.p>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            >
              <button className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary-light text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                <FiShoppingCart />
                Añadir al Carrito
              </button>
            </motion.div>

            <div className="mt-10 space-y-4">
              <Accordion title="Descripción">
                <p>{product.description || "No hay descripción disponible."}</p>
              </Accordion>
              <Accordion title="Especificaciones">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><FiBox className="text-primary dark:text-primary-dark"/> <strong>Tamaño:</strong> {product.size}</li>
                  <li className="flex items-center gap-3"><FiFeather className="text-primary dark:text-primary-dark"/> <strong>Peso:</strong> {product.weight}</li>
                  <li className="flex items-center gap-3"><FiDroplet className="text-primary dark:text-primary-dark"/> <strong>Color:</strong> {product.color}</li>
                  <li className="flex items-center gap-3"><FiZap className="text-primary dark:text-primary-dark"/> <strong>Materiales:</strong> {product.materials}</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;