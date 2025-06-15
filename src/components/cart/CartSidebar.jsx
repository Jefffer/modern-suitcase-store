import React from 'react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cartItems, cartTotal, removeFromCart, addToCart, decreaseQuantity } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Fondo oscuro overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />
          {/* Panel del carrito */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header del carrito */}
            <header className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-display font-bold text-slate-800 dark:text-white">Tu Carrito</h2>
              <button onClick={toggleCart} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                <FiX size={24} />
              </button>
            </header>

            {/* Lista de productos */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map(item => (
                  <div key={item._id} className="flex gap-4">
                    {console.log(item.images[0])}
                    <img src={item.images[0]} alt={item.name} className="w-24 h-24 rounded-lg object-contain" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-700 dark:text-slate-200">{item.name}</h3>
                        <p className="font-bold text-primary dark:text-primary-dark">${Number(item.price).toLocaleString("es-CL")}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 border border-slate-300 rounded-full">
                          <button onClick={() => decreaseQuantity(item._id)} className="p-2"><FiMinus size={14} /></button>
                          <span className="font-bold w-6 text-center">{item.quantity}</span>
                          <button onClick={() => addToCart(item)} className="p-2"><FiPlus size={14} /></button>
                        </div>
                        <button onClick={() => removeFromCart(item._id)} className="p-2 text-slate-500 hover:text-red-500">
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-slate-500">Tu carrito está vacío.</p>
              )}
            </div>

            {/* Footer del carrito */}
            {cartItems.length > 0 && (
              <footer className="p-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-display font-bold">${Number(cartTotal).toLocaleString("es-CL")}</span>
                </div>
                <Link to="/pedido" onClick={toggleCart} className="w-full block text-center bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-full transition-all duration-300">
                  Continuar al Pedido
                </Link>
              </footer>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;