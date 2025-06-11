import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; // Usaremos un ícono específico de Font Awesome

const WhatsAppButton = () => {
  // número de WhatsApp, incluyendo el código de país sin el '+'
  const phoneNumber = '1234567890'; 
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl"
      
      // Animación al hacer hover
      whileHover={{ 
        scale: 1.1, 
        rotate: 15,
        transition: { type: 'spring', stiffness: 300, damping: 10 }
      }}
      
      // Animación inicial para que el botón aparezca con un "pop"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <FaWhatsapp className="h-8 w-8 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;