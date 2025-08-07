import React from 'react';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return <h2 className="text-center text-xl mt-10">No items in Wishlist</h2>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-all"
        >
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
          <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          <p className="text-indigo-600 dark:text-indigo-400 font-bold mt-2">₹{item.price}</p>
          <button
            onClick={() => removeFromWishlist(item.id)}
            className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
