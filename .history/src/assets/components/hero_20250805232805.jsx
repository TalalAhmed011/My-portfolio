import React from "react";
import heroImg from "../assets/hero-image.png"; // Update the path as needed

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0F172A] text-[#F1F5F9] flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
            Hi, I'm <span className="text-[#38BDF8]">Talal Ahmed</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300">
            A passionate Frontend Developer creating modern, responsive, and performant web applications.
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

        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={F}
            alt="Talal Ahmed"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#38BDF8] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
