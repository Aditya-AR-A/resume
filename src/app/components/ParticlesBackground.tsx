"use client";
import React from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesOptions = {
  fullScreen: false,
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 200,
      density: { enable: true, value_area: 1200 },
    },
    color: {
      value: ["#ff00cc", "#3333ff", "#00ffcc", "#ffff00", "#ff6600", "#ff0000"],
      animation: {
        enable: true,
        speed: 20,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
    },
    size: {
      value: 8,
      random: { enable: true, minimumValue: 4 },
      anim: { enable: true, speed: 4, size_min: 2, sync: false },
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: "out" },
      path: {
        enable: true,
        delay: {
          value: 0,
        },
        generator: "perlinNoise",
        options: {},
      },
      attract: { enable: true, rotateX: 1200, rotateY: 2400 },
      angle: { value: 360, offset: 0 },
      gravity: { enable: false },
    },
    links: {
      enable: true,
      distance: 120,
      color: "random",
      opacity: 0.5,
      width: 2,
    },
  },
  detectRetina: true,
};

const ParticlesBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none select-none">
      <Particles id="tsparticles" options={particlesOptions} init={loadSlim} />
    </div>
  );
};

export default ParticlesBackground;
