import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black-100 py-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
      <div className="mb-4 md:mb-0 font-semibold text-lg">RAJA TALLAL</div>
      <div className="flex gap-4 items-center">
        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
          <Mail className="w-5 h-5 hover:text-blue-600" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-black" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-blue-700" />
        </a>
      </div>
      <div className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} All rights reserved.</div>
    </footer>
  );
};

export default Footer;
