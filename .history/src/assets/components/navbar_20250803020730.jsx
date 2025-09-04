import React from "react";

const Nav = () => {
  return (
    <nav className="bg-dark text-light fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center font-sans">
        <div className="flex items-center space-x-2 text-light text-xl font-semibold">
  <span className="bg-accent text-dark px-2 py-1 rounded">T</span>
  <span>tallal.dev</span>
</div>

        <ul className="hidden md:flex space-x-8 text-sm">
          <li><a href="#hero" className="hover:text-accent transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-accent transition duration-300">About</a></li>
          <li><a href="#projects" className="hover:text-accent transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent transition duration-300">Contact</a></li>
        </ul>
        <div className="md:hidden">
          {/* You can add hamburger mobile toggle here later */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
