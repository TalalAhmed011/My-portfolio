import React from 'react';

const projects = [
  {
    title: "Job Portal App",
    description: "Full-featured job portal with user roles, job posting, and dynamic resume builder.",
    image: "/project1.jpg",
    link: "https://your-project-link.com"
  },
  {
    title: "CV Builder",
    description: "Multi-step CV builder with experience section, responsive UI, and export functionality.",
    image: "/project2.jpg",
    link: "https://your-project-link.com"
  },
  {
    title: "Workflow Merger Tool",
    description: "Python-based tool to merge date-based files and export in .dat and .xlsx formats.",
    image: "/project3.jpg",
    link: "https://your-project-link.com"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
