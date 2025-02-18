import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const Home = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-white">
      {/* Particle Animation - Full Background */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <div className="text-center z-10 relative">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi! I'm <span className="text-blue-500">Rahul Kintali</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          A Data Analyst with expertise in SQL, Python, Power BI, and Data Visualization.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
