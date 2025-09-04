import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen //bg-[#0F172A]//*: text-[#F1F5F9] flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
          Hi, I'm <span className="text-[#38BDF8]">Talal Ahmed</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-300">
          A passionate Frontend Developer creating modern, responsive, and performant web applications.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="bg-[#38BDF8] text-[#0F172A] font-semibold py-3 px-6 rounded-xl hover:bg-[#0284C7] transition-all duration-300 shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-[#38BDF8] text-[#38BDF8] py-3 px-6 rounded-xl hover:bg-[#1E293B] hover:text-white transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
