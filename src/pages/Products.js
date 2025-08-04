import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API
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

  if (loading) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-600">Loading Products...</h2>
      </div>
    );
  }

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800 transition hover:shadow-lg">
            <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">{product.title}</h2>
            <p className="text-yellow-500 font-bold mt-2">${product.price}</p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
