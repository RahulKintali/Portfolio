import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // Ensures particles cover entire screen
        background: {
          color: "#ffffff",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 80, // Increased number of particles
            density: {
              enable: true,
              area: 800, // Keep area large for full coverage
            },
          },
          color: {
            value: "#3498db", // Light blue for a subtle effect
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5, // Slightly more visible
            random: true,
          },
          size: {
            value: 4, // Keep medium size
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#3498db",
            opacity: 0.4, // Make connections slightly visible
            width: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
