import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: { color: "#ffffff" },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 2 },
          links: { enable: true, distance: 150, color: "#000000" },
        },
      }}
      className="absolute w-full h-full -z-10"
    />
  );
};

export default ParticlesBackground;
