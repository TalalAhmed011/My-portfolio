import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold text-gray-800">RAJA TALLAL</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="text-gray-600 hover:text-blue-500 transition">About</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
