import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Crear el Contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto fácilmente
export const useCart = () => {
  return useContext(CartContext);
};

// 2. Crear el Proveedor del Contexto
export const CartProvider = ({ children }) => {
  // Estado para los items del carrito, inicializado desde localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse cart items from localStorage", error);
      return [];
    }
  });
  
  // Estado para controlar la visibilidad del carrito (sidebar)
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Efecto para guardar en localStorage cada vez que el carrito cambie
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // --- FUNCIONES DEL CARRITO ---

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item._id === product._id);
      if (existingItem) {
        // Si el item ya existe, incrementa la cantidad
        return prevItems.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Si es un item nuevo, lo añade al array con cantidad 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Abrimos el carrito al añadir un producto
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item._id === productId) {
          // Si la cantidad es mayor a 1, la decrementa. Si no, lo deja en 1.
          const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean); // Se mantiene el filter por si en el futuro se quiere eliminar si es < 1
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
  };
  
  const clearCart = () => {
    setCartItems([]);
  }

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  }

  // --- DATOS DERIVADOS ---

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  // El valor que será accesible por los componentes hijos
  const value = {
    cartItems,
    isCartOpen,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    toggleCart,
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};