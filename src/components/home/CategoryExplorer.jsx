import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import category1 from "../../assets/images/category6.jpg";
import category2 from "../../assets/images/category11.jpg";
import category3 from "../../assets/images/category3.jpg";
import category4 from "../../assets/images/category12.jpg";
import category5 from "../../assets/images/category13.jpg";

const categories = [
  {
    name: "Policarbonato",
    slug: "policarbonato",
    description: "Brillo y resistencia superior al impacto.",
    imageUrl: category1,
    emoji: "💎",
    gridClass: "lg:col-span-2 lg:row-span-2", // Tarjeta principal, más grande
  },
  {
    name: "Alto Impacto",
    slug: "alto-impacto",
    description: "Polipropileno flexible para absorber golpes.",
    imageUrl: category4,
    emoji: "🛡️",
    gridClass: "lg:row-span-2", // Tarjeta alta
  },
  {
    name: "Airza",
    slug: "airza",
    description: "Tejido impermeable que protege de la lluvia.",
    imageUrl: category3,
    emoji: "💧",
    gridClass: "lg:row-span-3", // La tarjeta más alta
  },
  {
    name: "Accesorios",
    slug: "accesorios",
    description: "Complementos esenciales para tu viaje.",
    imageUrl: category5,
    emoji: "🎒",
    gridClass: "lg:col-span-1", // Tarjeta horizontal pequeña
  },
  {
    name: "Palwonn",
    slug: "palwonn",
    description: "Poliéster de alta durabilidad y aventura.",
    imageUrl: category2,
    emoji: "🧵",
    gridClass: "lg:col-span-2", // Tarjeta horizontal ancha
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

// Componente de tarjeta reutilizable y mejorado
const CategoryCard = ({ category }) => (
  <motion.a
    href={`/catalogo?categoria=${category.slug}`}
    className={`group relative rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end min-h-[280px] md:min-h-[320px] ${category.gridClass}`}
    variants={cardVariants}
    transition={{ duration: 0.5 }}
  >
    {/* Imagen de fondo con efecto de hover */}
    <img
      src={category.imageUrl}
      alt={`Maletas de ${category.name}`}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      loading="lazy"
    />
    {/* Overlay degradado para legibilidad */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    {/* Contenedor de texto y emoji */}
    <div className="relative z-10 p-6 text-white w-full">
      {/* Emoji animado: la animación ahora se activa con group-hover */}
      <motion.div
        className="text-5xl mb-3 drop-shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-12"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
      >
        {category.emoji}
      </motion.div>
      
      <h3 className="text-3xl font-display font-bold leading-tight tracking-tight">
        {category.name}
      </h3>
      <p className="text-lg text-slate-200/95 mt-1 max-w-xs">{category.description}</p>
      
      {/* Indicador 'Explorar' que aparece en hover */}
      <div className="mt-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-semibold">Explorar</span>
        <FiArrowRight />
      </div>
    </div>
  </motion.a>
);

const CategoryExplorer = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center bg-slate-50 dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-display font-extrabold text-slate-800 dark:text-white sm:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Un Material para Cada Aventura
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Cada colección está diseñada con un propósito. Encuentra la tuya y prepárate para el despegue.
        </motion.p>
      </div>

      {/* --- Contenedor del Collage (CSS GRID Responsivo) --- */}
      <motion.div
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-3 gap-6 auto-rows-[280px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Mapeamos las categorías para crear las tarjetas dinámicamente */}
        {categories.map((cat) => (
          <CategoryCard key={cat.slug} category={cat} />
        ))}
      </motion.div>
    </section>
  );
};

export default CategoryExplorer;