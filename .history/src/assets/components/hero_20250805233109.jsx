import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0F172A] text-[#F1F5F9] flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight">
            Hi, I'm <span className="text-[#38BDF8]">Talal Ahmed</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-300">
            A passionate Frontend Developer creating modern, responsive, and performant web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a
              href="#projects"
              className="bg-[#38BDF8] text-[#0F172A] font-semibold py-3 px-6 rounded-xl hover:bg-[#0284C7] transition-all duration-300 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="/TalalAhmed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#38BDF8] text-[#38BDF8] py-3 px-6 rounded-xl hover:bg-[#1E293B] hover:text-white transition-all duration-300"
            >
              📄 View CV
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex justify-center">
          <img
            src="/F.jpg" // Image from public folder
            alt="Talal Ahmed"
            className="w-64 h-64 object-cover rounded-full border-4 border-[#38BDF8] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
