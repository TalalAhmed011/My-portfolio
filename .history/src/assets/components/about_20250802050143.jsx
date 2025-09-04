import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-6 leading-8">
          I'm a passionate developer with experience in building responsive and dynamic web interfaces. I specialize in React, Tailwind CSS, and JavaScript. I enjoy creating clean and user-friendly UI/UX.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">React</span>
          <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">JavaScript</span>
          <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">Node.js</span>
        </div>
      </div>
    </section>
  );
};

export default About;
