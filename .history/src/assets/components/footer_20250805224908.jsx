import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
      <div className="mb-4 md:mb-0 font-semibold text-lg">RAJA TALLAL</div>
              <div className="flex justify-center gap-6 mb-8">
                <a
                  href="mailto:talal445678@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://github.com/TalalAhmed011"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-blue-500"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/raja-tallal-849368282"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:text-blue-500"
                >
                  <Linkedin size={24} />
                </a>
              </div>
      <div className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} All rights reserved.</div>
    </footer>
  );
};

export default Footer;
