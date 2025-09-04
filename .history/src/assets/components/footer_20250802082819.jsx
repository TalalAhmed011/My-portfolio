import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-accent transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
