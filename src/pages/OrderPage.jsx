import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const OrderPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    setIsSubmitting(true);

    const order_id = `MU-${Date.now()}`;
    const order_details = cartItems.map(item => 
      `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString("es-CL")}`
    ).join('\n');
    
    const templateParams = {
        order_id: order_id,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        shipping_address: formData.address,
        order_details: order_details,
        total_price: `$${cartTotal.toLocaleString("es-CL")}`
    };

    // Reemplaza con tus IDs de EmailJS
    const serviceID = 'service_2j4ig4n';
    const templateID = 'template_qd3lbst';
    const publicKey = 'HBocGiWPceGhGPSWU';

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         alert('¡Pedido enviado con éxito! Revisa tu correo para ver los detalles.');
         clearCart();
         navigate('/'); // Redirige a la home
      }, (err) => {
         console.log('FAILED...', err);
         alert('Hubo un error al enviar el pedido. Por favor, inténtalo de nuevo.');
         setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Columna del formulario */}
        <div>
          <h1 className="text-3xl font-display font-bold mb-6">Finalizar Pedido</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Nombre Completo" required onChange={handleInputChange} className="w-full p-3 rounded-lg border" />
            <input type="email" name="email" placeholder="Correo Electrónico" required onChange={handleInputChange} className="w-full p-3 rounded-lg border" />
            <input type="tel" name="phone" placeholder="Teléfono de Contacto" required onChange={handleInputChange} className="w-full p-3 rounded-lg border" />
            <textarea name="address" placeholder="Dirección de Envío" required onChange={handleInputChange} className="w-full p-3 rounded-lg border" rows="3"></textarea>
            <button type="submit" disabled={isSubmitting} className="w-full p-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light disabled:bg-slate-400">
              {isSubmitting ? 'Enviando Pedido...' : 'Realizar Pedido'}
            </button>
          </form>
        </div>
        {/* Columna del resumen */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Resumen de tu compra</h2>
          <div className="space-y-3 mb-4">
            {cartItems.map(item => (
              <div key={item._id} className="flex justify-between">
                <span>{item.name} <span className="text-sm">x{item.quantity}</span></span>
                <span>${(item.price * item.quantity).toLocaleString("es-CL")}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between font-bold text-xl border-t pt-2">
            <span>Total</span>
            <span>${cartTotal.toLocaleString("es-CL")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;