import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiMail, FiClock } from "react-icons/fi";

// La data de las tiendas ahora vive aquí
const storesData = [
  {
    city: "Bogotá",
    emoji: "🏙️",
    address: "Avenida Siempre Viva 123, Bogotá D.C.",
    email: "bogota@maletasuniversal.com",
    hours: {
      weekdays: "11:00 am - 7:00 pm",
      saturday: "11:00 am - 7:00 pm",
      sunday: "11:00 am - 6:00 pm",
    },
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127262.80236894379!2d-74.14849004113955!3d4.648283534574975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1!5e0!3m2!1ses!2sco!4v1718301777452!5m2!1ses!2sco",
  },
  {
    city: "Medellín",
    emoji: "🌸",
    address: "Carrera 43A #6S-15, Medellín, Antioquia",
    email: "medellin@maletasuniversal.com",
    hours: {
      weekdays: "10:00 am - 8:00 pm",
      saturday: "10:00 am - 8:00 pm",
      sunday: "11:00 am - 5:00 pm",
    },
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.48287515084!2d-75.6764516805118!3d6.223632994848135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1718301887016!5m2!1ses!2sco",
  },
  {
    city: "Bucaramanga",
    emoji: "🐜",
    address: "Calle 35 #19-45, Bucaramanga, Santander",
    email: "bucaramanga@maletasuniversal.com",
    hours: {
      weekdays: "10:00 am - 7:00 pm",
      saturday: "10:00 am - 6:00 pm",
      sunday: "Cerrado",
    },
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126685.23447551978!2d-73.18432367929428!3d7.125393433892338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f1b0a51988d%3A0x696144865f33983d!2sBucaramanga%2C%20Santander!5e0!3m2!1ses!2sco!4v1718301931345!5m2!1ses!2sco",
  },
];

// El componente TabButton también vive aquí
const TabButton = ({ store, isSelected, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className="relative w-full p-4 text-left transition"
    >
      <span className="relative z-10 font-display text-2xl font-bold">
        {store.emoji} {store.city}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeStoreTab"
          className="absolute inset-0 bg-primary/20 dark:bg-primary-dark/30 rounded-lg"
          style={{ borderRadius: 12 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      )}
    </button>
  );
};

const StoresPage = () => {
  const [selectedStore, setSelectedStore] = useState(storesData[0]);

  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Encabezado de la página */}
      <header className="bg-slate-50 dark:bg-slate-800/50 py-16 text-center">
        <motion.h1
          className="text-4xl font-display font-extrabold text-slate-800 dark:text-white sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestras Sedes Físicas
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Encuentra tu tienda más cercana. ¡Te esperamos para asesorarte en tu
          próxima aventura!
        </motion.p>
      </header>

      {/* Contenido principal de la página */}
      <main id="sedes-fisicas" className="py-20 sm:py-24">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Columna de Pestañas */}
            <div className="flex flex-col gap-2">
              {storesData.map((store) => (
                <TabButton
                  key={store.city}
                  store={store}
                  isSelected={selectedStore.city === store.city}
                  onSelect={() => setSelectedStore(store)}
                />
              ))}
            </div>

            {/* Columna de Contenido y Mapa */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedStore.city}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl shadow-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-primary-dark mb-2 flex items-center gap-2">
                          <FiMapPin /> Dirección
                        </h3>
                        <p className="text-lg text-slate-700 dark:text-slate-200">
                          {selectedStore.address}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-primary-dark mb-2 flex items-center gap-2">
                          <FiMail /> Correo
                        </h3>
                        <p className="text-lg text-slate-700 dark:text-slate-200">
                          {selectedStore.email}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-primary-dark mb-2 flex items-center gap-2">
                          <FiClock /> Horarios
                        </h3>
                        <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                          <li>
                            <strong>Lunes - Viernes:</strong>{" "}
                            {selectedStore.hours.weekdays}
                          </li>
                          <li>
                            <strong>Sábado:</strong>{" "}
                            {selectedStore.hours.saturday}
                          </li>
                          <li>
                            <strong>Domingos y festivos:</strong>{" "}
                            {selectedStore.hours.sunday}
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mapa de Google */}
                    <div className="w-full h-80 md:h-full rounded-xl overflow-hidden shadow-md border-4 border-white dark:border-slate-700">
                      <iframe
                        src={selectedStore.mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoresPage;
