import React from "react";

const Navbar = () => {
  return (
    <header className="bg-background text-textPrimary font-heading fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-accent">Tallal.dev</h1>
        <nav>
          <ul className="flex space-x-6 text-sm font-body">
            <li className="hover:text-accent transition duration-300">
              <a href="#hero">Home</a>
            </li>
            <li className="hover:text-accent transition duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-accent transition duration-300">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-accent transition duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
