import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import category1 from "../../assets/images/category6.jpg";
import category2 from "../../assets/images/category11.jpg";
import category3 from "../../assets/images/category3.jpg";
import category4 from "../../assets/images/category12.jpg";
import category5 from "../../assets/images/category13.jpg";

// Emojis para cada categoría
const categoryEmojis = [
  "💎", // Policarbonato
  "🧵", // Palwonn
  "💧", // Airza
  "🛡️", // Alto Impacto
  "🎒", // Accesorios
];

const categories = [
  {
    name: "Policarbonato",
    slug: "policarbonato",
    description: "Ligereza, brillo y una resistencia superior a los impactos.",
    imageUrl: category1,
  },
  {
    name: "Alto Impacto",
    slug: "alto-impacto",
    description:
      "Polipropileno flexible y robusto, diseñado para absorber golpes.",
    imageUrl: category4,
  },
  {
      name: "Airza",
      slug: "airza",
      description:
      "Tejido de poliéster impermeable que protege tus pertenencias de la lluvia.",
      imageUrl: category3,
    },
    {
      name: "Accesorios",
      slug: "accesorios",
      description:
        "Complementos esenciales para tu viaje, desde organizadores hasta etiquetas de equipaje.",
      imageUrl: category5,
    },
    {
      name: "Palwonn",
      slug: "palwonn",
      description:
        "Poliéster de alta durabilidad para resistir las aventuras más exigentes.",
      imageUrl: category2,
    },
];

const CategoryExplorer = () => {
  // Variantes de animación personalizadas para cada tarjeta
  const cardVariants = {
    card1: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    card2: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    card3: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    card4: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    card5: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const transition = { type: "spring", stiffness: 50, duration: 0.8 };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center bg-slate-50 dark:bg-slate-900 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
        <motion.h2
          className="text-4xl font-display font-extrabold text-slate-800 dark:text-white sm:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Explora por Categorías
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Cada material ofrece una ventaja única.{" "}
          <span className="font-semibold text-primary">¡Descubre el tuyo!</span>
        </motion.p>
      </div>

      {/* --- Contenedor del Collage (CSS GRID) --- */}
      {/*
        En mobile: un stack vertical simple (grid-cols-1)
        En desktop (lg): un grid complejo de 4 columnas y 3 filas para el efecto collage.
      */}
      <motion.div
        className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-6 h-[80vh] min-h-[900px] lg:min-h-[700px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* --- TARJETA 1: POLICARBONATO (Ocupa más espacio vertical) --- */}
        <motion.a
          href={`/catalogo?categoria=${categories[0].slug}`}
          className="group relative lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden shadow-xl"
          variants={cardVariants.card1}
          transition={transition}
        >
          <img
            src={categories[0].imageUrl}
            alt={categories[0].name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <motion.div
            className="absolute top-6 left-6 z-20 text-[2.5rem] drop-shadow-lg select-none"
            initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
            animate={{ scale: 1.1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.25, rotate: 8 }}
          >
            💎
          </motion.div>
          <div className="relative h-full flex flex-col justify-end p-8 text-white">
            <h3 className="text-4xl font-display font-bold">
              {categories[0].name}
            </h3>
            <p className="mt-2 text-lg text-slate-200">
              {categories[0].description}
            </p>
          </div>
        </motion.a>

        {/* --- TARJETA 2: Alto Impacto (Texto afuera, debajo de la imagen) --- */}
        <motion.a
          href={`/catalogo?categoria=${categories[1].slug}`}
          className="group lg:col-start-3 lg:row-span-2 rounded-2xl overflow-hidden shadow-xl flex flex-col bg-white dark:bg-slate-900"
          variants={cardVariants.card2}
          transition={transition}
        >
          <div className="h-2/3 overflow-hidden">
            <img
              src={categories[1].imageUrl}
              alt={categories[1].name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <div className="h-1/3 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white">
              {categories[1].name}
            </h3>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              {categories[1].description}
            </p>
          </div>
        </motion.a>

        {/* --- TARJETA 3: AIRZA (Texto afuera, encima de la imagen) --- */}
        <motion.a
          href={`/catalogo?categoria=${categories[2].slug}`}
          className="group lg:col-span-1 lg:col-start-4 lg:row-span-3 rounded-2xl overflow-hidden shadow-xl flex flex-col bg-primary dark:bg-primary-dark"
          variants={cardVariants.card4}
          transition={transition}
        >
          <div className="p-6 text-white h-1/4">
            <h3 className="text-2xl font-display font-bold">
              {categories[2].name}
            </h3>
            <p className="mt-1 opacity-80">{categories[2].description}</p>
          </div>
          
          <div className="h-3/4 overflow-hidden">
            <img
              src={categories[2].imageUrl}
              alt={categories[2].name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.a>

        {/* --- TARJETA 4: ACCESORIOS (Ocupa espacio horizontal) --- */}
        <motion.a
          href={`/catalogo?categoria=${categories[3].slug}`}
          className="group relative lg:col-span-1 lg:row-start-3 rounded-2xl overflow-hidden shadow-xl"
          variants={cardVariants.card3}
          transition={transition}
        >
          <img
            src={categories[3].imageUrl}
            alt={categories[3].name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-125"
          />
          <div className="absolute inset-0 bg-black/60">
          <motion.div
            className="absolute top-6 left-6 z-20 text-[2.5rem] drop-shadow-lg select-none"
            initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
            animate={{ scale: 1.1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.25, rotate: 8 }}
          >
            🎒
          </motion.div></div>
          
          <div className="relative h-full flex flex-col justify-center items-center p-6 text-white text-center">
            <h3 className="text-3xl font-display font-bold">
              {categories[3].name}
            </h3>
            <p className="mt-1 text-slate-200">{categories[3].description}</p>
          </div>
        </motion.a>

        {/* --- TARJETA 5: Palwonn (CTA simple) --- */}
        <motion.a
          href={`/catalogo?categoria=${categories[4].slug}`}
          className="group relative lg:col-start-2 lg:row-start-3 lg:col-span-2 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center text-center"
          variants={cardVariants.card5}
          transition={transition}
        >
          <img
            src={categories[4].imageUrl}
            alt={categories[4].name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75"
          />
          <motion.div
            className="absolute top-6 left-6 z-20 text-[2.5rem] drop-shadow-lg select-none"
            initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
            animate={{ scale: 1.1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.25, rotate: 8 }}
          >
            🧵
          </motion.div>
          <div className="relative p-6 text-white">
            <h3 className="text-4xl font-display font-bold">
              {categories[4].name}
            </h3>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-white/50 rounded-full group-hover:bg-white/10 transition-colors">
              <span>{categories[4].description}</span>
              <FiArrowRight />
            </div>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CategoryExplorer;
