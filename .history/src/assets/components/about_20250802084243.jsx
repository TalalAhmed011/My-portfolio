import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-dark text-light py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-semibold mb-6 text-white">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I'm a passionate developer focused on building clean, efficient, and scalable web experiences.
          With experience in both frontend and backend technologies, I take pride in delivering visually
          appealing and user-friendly applications. Always eager to learn, experiment, and refine my craft.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#1a1a1d] p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#2c4f53] mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">React, Tailwind, JavaScript, HTML, CSS</p>
          </div>
          <div className="bg-[#1a1a1d] p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">Backend</h3>
            <p className="text-gray-400 text-sm">Node.js, SQL</p>
          </div>
          <div className="bg-[#1a1a1d] p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#38BDF8] mb-2">Tools</h3>
            <p className="text-gray-400 text-sm">Git, VS Code, Figma, Postman, Firebase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
