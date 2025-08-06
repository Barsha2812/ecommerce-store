import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  if (cart.length === 0) {
    return <h2 className="text-center text-2xl mt-10">Your cart is empty.</h2>;
  }

  return (
    <div className="py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-600">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center border p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-yellow-500 font-bold">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button
          onClick={clearCart}
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
