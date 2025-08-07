import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="text-center py-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-blue-600">Welcome to E-Shop!</h1>
      <p className="text-xl mt-4">Your one-stop shop for cool products 🚀</p>
    </motion.div>
  );
};

export default Home;
