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
    name: "Palwonn",
    slug: "palwonn",
    description:
      "Poliéster de alta durabilidad para resistir las aventuras más exigentes.",
    imageUrl: category2,
  },
  {
    name: "Airza",
    slug: "airza",
    description:
      "Tejido de poliéster impermeable que protege tus pertenencias de la lluvia.",
    imageUrl: category3,
  },
  {
    name: "Alto Impacto",
    slug: "alto-impacto",
    description:
      "Polipropileno flexible y robusto, diseñado para absorber golpes.",
    imageUrl: category4,
  },
  {
    name: "Accesorios",
    slug: "accesorios",
    description:
      "Complementos esenciales para tu viaje, desde organizadores hasta etiquetas de equipaje.",
    imageUrl: category5,
  },
];

// Animación para las tarjetas
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: i => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.13,
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  }),
};

const CategoryCard = ({ category, emoji, index }) => (
  <motion.a
    href={`/catalogo?categoria=${category.slug}`}
    className={`
      group relative rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-end
      min-h-[340px] h-[28vw] max-h-[420px] bg-white/20 dark:bg-slate-900/30
      backdrop-blur-xl border border-white/30 dark:border-slate-800
      transition-all duration-300 hover:scale-105 hover:z-20
      hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
    `}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={cardVariants}
    style={{ minWidth: 240 }}
  >
    {/* Imagen de fondo */}
    <img
      src={category.imageUrl}
      alt={`Maletas de ${category.name}`}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
      loading="lazy"
    />
    {/* Overlay glassmorphism */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    {/* Emoji animado */}
    <motion.div
      className="absolute top-6 left-6 z-20 text-[2.5rem] drop-shadow-lg select-none"
      initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
      animate={{ scale: 1.1, rotate: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 + index * 0.1 }}
      whileHover={{ scale: 1.25, rotate: 8 }}
    >
      {emoji}
    </motion.div>
    {/* Icono CTA animado */}
    <motion.div
      className="absolute bottom-6 right-6 p-3 bg-white/30 rounded-full backdrop-blur-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
      initial={{ y: 20, opacity: 0 }}
      whileHover={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <FiArrowRight className="text-white h-6 w-6" />
    </motion.div>
    {/* Texto */}
    <div className="relative z-10 p-7 pb-8 flex flex-col gap-2">
      <h3 className="text-2xl font-display font-extrabold text-white drop-shadow-lg mb-1 tracking-tight">
        {category.name}
      </h3>
      <p className="text-base text-slate-200/90 drop-shadow-md">{category.description}</p>
    </div>
  </motion.a>
);

const CategoryNew = () => (
  <section className="relative bg-gradient-to-br from-primary/10 via-slate-100/80 to-slate-300/60 dark:from-primary-dark/20 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center min-h-screen py-10 overflow-x-hidden">
    {/* Fondo decorativo animado */}
    <motion.div
      className="absolute inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-gradient-radial from-primary/20 via-primary/0 to-transparent rounded-full blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
          Cada material ofrece una ventaja única. <span className="font-semibold text-primary">¡Descubre el tuyo!</span>
        </motion.p>
      </div>
      {/* Collage grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-end">
        {categories.map((category, i) => (
          <CategoryCard
            key={category.slug}
            category={category}
            emoji={categoryEmojis[i % categoryEmojis.length]}
            index={i}
          />
        ))}
      </div>
    </div>
  </section>
);

export default CategoryNew;