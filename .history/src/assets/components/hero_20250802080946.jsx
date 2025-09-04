// src/assets/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white px-6 md:px-12"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-dark mb-6 leading-tight">
          Hi, I'm <span className="text-accent">Tallal</span>
        </h1>
        <p className="text-lg md:text-xl text-muted mb-8 font-sans">
          A passionate Frontend Developer crafting clean, modern, and responsive
          websites using React, Tailwind, and more.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-md bg-accent text-white font-semibold transition-all hover:bg-blue-600"
          >
            Contact Me
          </a>
          <a
            href="/Tallal_CV.pdf"
            className="px-6 py-3 rounded-md border border-accent text-accent font-semibold transition-all hover:bg-accent hover:text-white"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
