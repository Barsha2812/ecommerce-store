import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { cart } = useCart(); // ✅ Access cart from Context API

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-lg transition-all duration-500">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
        🛒 E-Shop
      </h1>

      {/* Navigation Links */}
      <div className="space-x-8 flex">
        <Link
          className="relative text-white text-lg font-semibold hover:text-yellow-300 transition duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          to="/"
        >
          Home
        </Link>
        <Link
          className="relative text-white text-lg font-semibold hover:text-yellow-300 transition duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          to="/products"
        >
          Products
        </Link>

        {/* Cart Link with Badge */}
        <Link
          className="relative text-white text-lg font-semibold hover:text-yellow-300 transition duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          to="/cart"
        >
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
              {cart.length}
            </span>
          )}
        </Link>
      </div>

      {/* Dark Mode Button */}
      <button
        onClick={toggleDarkMode}
        className="px-5 py-2 bg-yellow-400 text-gray-900 rounded-full font-bold shadow-md hover:bg-yellow-300 transform hover:scale-105 hover:shadow-yellow-400/50 transition duration-300"
      >
        {darkMode ? '☀ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
};

export default Navbar;
