import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const Home = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-white">
      <ParticlesBackground />
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi! I'm <span className="text-blue-500">Your Name</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm a passionate Software Developer.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
