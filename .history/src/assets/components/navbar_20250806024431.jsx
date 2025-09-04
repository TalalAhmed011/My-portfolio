import React from "react";

const Nav = () => {
  return (
    <nav className="bg-dark text-light fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-sans">
        <h1 className="flex items-center gap-2 text-2xl font-semibold tracking-wide text-light">
  <img src="/lu.png" alt="Logo" className="w-18 h-12 object-contain" />

</h1>

        <ul className="hidden md:flex space-x-8 text-sm">
          <li><a href="#hero" className="hover:text-[#38BDF8] transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-[#38BDF8] transition duration-300">About</a></li>
          <li><a href="#projects" className="hover:text-[#38BDF8] transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#38BDF8] transition duration-300">Contact</a></li>
        </ul>
        <div className="md:hidden">
          {/* You can add hamburger mobile toggle here later */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
