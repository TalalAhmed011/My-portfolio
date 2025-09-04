import React from "react";

const Hero = () => {
  return (
    <section className="bg-terminalBg text-terminalGreen font-terminal h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl mb-4">Hello, I’m <span className="text-terminalAccent">Your Name</span></h1>
        <p className="text-lg md:text-xl mb-6">A passionate full-stack developer building terminal-inspired experiences.</p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="border border-terminalAccent px-6 py-2 hover:bg-terminalAccent hover:text-terminalBg transition-colors duration-300">View Projects</a>
          <a href="#contact" className="border border-terminalGreen px-6 py-2 hover:bg-terminalGreen hover:text-terminalBg transition-colors duration-300">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
