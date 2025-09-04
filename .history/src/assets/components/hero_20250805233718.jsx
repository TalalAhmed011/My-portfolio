import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen bg-[#0F172A] text-[#F1F5F9] flex items-center justify-center px-6"
    >
      {/* 🔵 Animated Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#38BDF8] rounded-full opacity-20 blur-3xl z-0" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[250px] h-[250px] bg-[#0ea5e9] rounded-full opacity-20 blur-2xl z-0" />

      {/* 🌟 Main Content */}
      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        {/* 📝 Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left space-y-6"
        >
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
        </motion.div>

        {/* 👤 Right: Image + Circle + Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex-1 relative flex justify-center md:justify-end"
        >
          {/* Background circle behind image */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#1E293B] rounded-full opacity-30 top-0 md:top-10 right-0 -z-10" />

          {/* Profile Image */}
          <img
            src="/F.jpg"
            alt="Talal Ahmed"
            className="w-[280px] md:w-[360px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute top-0 right-0 mt-4 mr-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 w-64 shadow-lg z-10 hidden sm:block">
            <h4 className="text-sm font-semibold text-white mb-2">
              Companies I've Worked With
            </h4>
            <div className="flex flex-wrap gap-2 text-white text-xs">
              <span className="bg-white/20 px-2 py-1 rounded">Netflix</span>
              <span className="bg-white/20 px-2 py-1 rounded">Google</span>
              <span className="bg-white/20 px-2 py-1 rounded">Shopify</span>
              <span className="bg-white/20 px-2 py-1 rounded">Meta</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
