import React, { useEffect, useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'framer-motion';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'all' || product.category === category)
    );
  }, [products, searchTerm, category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-10"
    >
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Products</h1>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4 px-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded-lg w-full sm:w-1/2 focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border p-2 rounded-lg w-full sm:w-1/4 focus:ring-2 focus:ring-purple-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {filteredProducts.map(product => (
          <motion.div
            key={product.id}
            className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
              {product.title}
            </h2>
            <p className="text-yellow-500 font-bold mt-2">${product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => addToWishlist(product)}
              className="mt-2 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
            >
              ❤️ Add to Wishlist
            </button>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products found.</p>
      )}
    </motion.div>
  );
};

export default Products;
