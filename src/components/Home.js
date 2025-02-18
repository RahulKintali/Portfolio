import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-white">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 2 },
            links: { enable: true, color: "#a8a8a8" },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Text Content */}
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold">
          Hi! I'm <span className="text-blue-500">Rahul Kintali</span>
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          A Data Analyst with expertise in SQL, Python, Power BI, and Data Visualization.
        </p>
      </div>
    </div>
  );
};

export default Home;
