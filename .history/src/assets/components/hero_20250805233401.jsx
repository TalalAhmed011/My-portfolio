import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0F172A] text-[#F1F5F9] flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
            Hello, I'm <span className="text-[#38BDF8]">Talal Ahmed</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300">
            I’m a Frontend Developer crafting responsive, accessible, and elegant web interfaces with React and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Resume-TalalAhmed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#38BDF8] text-[#0F172A] font-semibold py-3 px-6 rounded-xl hover:bg-[#0284C7] transition-all duration-300 shadow-lg"
            >
              📄 View CV
            </a>

            <a
              href="#projects"
              className="border border-[#38BDF8] text-[#38BDF8] py-3 px-6 rounded-xl hover:bg-[#1E293B] hover:text-white transition-all duration-300"
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

        {/* Right: Full Image with background circle */}
        <div className="flex-1 relative flex justify-center md:justify-end">
          {/* Background circle behind the image */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#1E293B] rounded-full opacity-30 top-0 md:top-10 right-0 -z-10" />

          {/* Actual Image */}
          <img
            src="/F.jpg"
            alt="Talal Ahmed"
            className="w-[280px] md:w-[360px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
