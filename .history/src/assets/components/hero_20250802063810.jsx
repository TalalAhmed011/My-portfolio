import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-background text-textPrimary font-heading flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-accent">Tallal</span> — <br />
          a Frontend Developer crafting modern & elegant web interfaces.
        </h1>
        <p className="text-textSecondary font-body mb-8 text-sm md:text-base">
          Passionate about clean code, responsive design, and seamless user experience.
        </p>
        <a
          href="#projects"
          className="inline-block bg-accent text-black font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
