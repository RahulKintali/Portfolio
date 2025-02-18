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
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: {
            value: 40,  // Reduced particle count
            density: {
              enable: true,
              area: 600,  // Smaller area
            },
          },
          color: {
            value: "#000000",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,  // Slightly more visible
            random: true,
          },
          size: {
            value: 3,  // Smaller size for subtle effect
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
            distance: 100,  // Reduce linking distance
            color: "#000000",
            opacity: 0.2,  // Reduce link visibility
            width: 0.8,  // Thinner lines
          },
        },
      }}
      className="absolute w-full h-full -z-10 opacity-70"
    />
  );
};

export default ParticlesBackground;
