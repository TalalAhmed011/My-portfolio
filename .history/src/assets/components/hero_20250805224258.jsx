import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      // bg-[#0F172A]
      className="min-h-screen bg-[#0F172A] text-[#F1F5F9] flex items-center justify-center px-6"
    >
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
  <a
    href="/TalalAhmed_Resume.pdf"
    download
    className="bg-[#38BDF8] text-[#0F172A] font-semibold py-3 px-6 rounded-xl hover:bg-[#0284C7] transition-all duration-300 shadow-lg"
  >
    📄 Download CV
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

    </section>
  );
};

export default Hero;
