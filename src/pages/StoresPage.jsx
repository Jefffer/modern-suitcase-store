import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiMail, FiClock } from "react-icons/fi";

// Coordenadas aproximadas del centro de cada ciudad
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
    coords: [4.60972, -74.08167], // Centro de Bogotá
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
    coords: [6.244203, -75.581211], // Centro de Medellín
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
    coords: [7.119349, -73.122741], // Centro de Bucaramanga
  },
];

// Icono personalizado para los pines
const storeIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

function MapFlyTo({ coords }) {
  const map = useMap();
  React.useEffect(() => {
    if (coords) {
      map.flyTo(coords, 13, { duration: 1.2 });
    }
  }, [coords, map]);
  return null;
}

function MapUpdater({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 13, { duration: 1.2 });
      // Forzamos la actualización del tamaño después de un breve instante
      // para dar tiempo al DOM a estabilizarse.
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }
  }, [coords, map]);
  return null;
}

const StoresPage = () => {
  const [selectedStore, setSelectedStore] = useState(storesData[0]);

  return (
    <div className="relative min-h-screen pb-10 bg-gradient-to-br from-sky-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Encabezado */}
      <header className="pt-24 pb-8 text-center">
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
          Haz clic en el mapa o en las pestañas para ver la información de cada
          sede.
        </motion.p>
      </header>

      {/* Mapa protagonista */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ height: "70vh" }}
      >
        <div className="absolute z-20 left-0 top-0 w-full lg:w-80 flex lg:flex-col gap-2 p-2 lg:p-0">
          {storesData.map((store) => (
            <button
              key={store.city}
              onClick={() => setSelectedStore(store)}
              className={`flex-1 lg:flex-none rounded-xl px-4 py-3 font-display text-lg font-bold transition
                ${
                  selectedStore.city === store.city
                    ? "bg-primary/90 text-white shadow-lg scale-105"
                    : "bg-white/80 dark:bg-slate-800/80 text-slate-800 dark:text-white hover:bg-primary/20"
                }
              `}
              style={{ minWidth: 0 }}
            >
              <span className="text-2xl mr-2">{store.emoji}</span>
              {store.city}
            </button>
          ))}
        </div>
        <div className="w-full h-[70vh] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 relative z-10">
          <MapContainer
            // key={selectedStore.city}
            center={selectedStore.coords}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
            className="z-0"
            zoomControl={false}
          >
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater coords={selectedStore.coords} />
            {storesData.map((store) => (
              <Marker
                key={store.city}
                position={store.coords}
                icon={storeIcon}
                eventHandlers={{
                  click: () => setSelectedStore(store),
                }}
              >
                <Popup>
                  <div className="font-display font-bold text-lg mb-1">
                    {store.emoji} {store.city}
                  </div>
                  <div className="text-sm mb-2">{store.address}</div>
                  {/* ENLACE DE GOOGLE MAPS */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${store.coords[0]},${store.coords[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-3 py-1 rounded-full bg-sky-100 text-white text-xs font-semibold hover:bg-sky-200 transition"
                  >
                    Ver en Google Maps
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        {/* Tarjeta flotante de información */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStore.city}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute right-0 bottom-0 lg:top-0 lg:right-8 w-full lg:w-[370px] bg-white/95 dark:bg-slate-900/95 rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-primary/20 dark:border-primary-dark/30 z-30 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedStore.emoji}</span>
              <h2 className="text-2xl font-display font-bold text-primary dark:text-primary-dark">
                {selectedStore.city}
              </h2>
            </div>
            <div className="mb-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-dark mb-1 flex items-center gap-2">
                <FiMapPin /> Dirección
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-200">
                {selectedStore.address}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-dark mb-1 flex items-center gap-2">
                <FiMail /> Correo
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-200">
                {selectedStore.email}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-dark mb-1 flex items-center gap-2">
                <FiClock /> Horarios
              </h3>
              <ul className="text-slate-600 dark:text-slate-300 space-y-1 text-sm">
                <li>
                  <strong>Lunes - Viernes:</strong>{" "}
                  {selectedStore.hours.weekdays}
                </li>
                <li>
                  <strong>Sábado:</strong> {selectedStore.hours.saturday}
                </li>
                <li>
                  <strong>Domingos y festivos:</strong>{" "}
                  {selectedStore.hours.sunday}
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StoresPage;
