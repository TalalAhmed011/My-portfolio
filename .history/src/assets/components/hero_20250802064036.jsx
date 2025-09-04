import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white transition-all duration-500"
    >
      <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 drop-shadow-lg">
        Hi, I'm <span className="text-yellow-300">Raja Tallal</span>
      </h1>
      <p className="text-xl md:text-2xl font-sans mb-8 max-w-xl">
        A passionate Frontend Developer crafting clean, modern, and user-friendly web experiences.
      </p>
      <a
        href="#projects"
        className="mt-4 inline-block bg-white text-indigo-600 hover:bg-yellow-300 hover:text-black font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md hover:scale-105"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
