import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => <h2 className="text-center mt-10 text-2xl dark:text-white">Welcome to Home Page</h2>;
const Products = () => <h2 className="text-center mt-10 text-2xl dark:text-white">Products Page</h2>;
const Cart = () => <h2 className="text-center mt-10 text-2xl dark:text-white">Cart Page</h2>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
