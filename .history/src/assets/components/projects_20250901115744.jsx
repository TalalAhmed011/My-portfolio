import React from "react";

const projects = [
  {
    title: "Job Portal App",
    description: "A full-featured job portal with role-based access, dynamic job listings, and application tracking.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "https://your-job-portal-link.com",
  },
  {
    title: "CV Builder",
    description: "Multi-step dynamic CV builder with editable experience sections and responsive UI.",
    tech: ["React", "Bootstrap", "JavaScript"],
    link: "https://your-cv-builder-link.com",
  },
  {
    title: "Python GUI Merger",
    description: "A desktop app to merge `.DAT` files and export to `.xlsx`, built with Tkinter and Pandas.",
    tech: ["Python", "Tkinter", "Pandas"],
    link: "https://your-python-gui-link.com",
  },

  {
    title: " Company Monthly File upl ",
    description: "A Python Tkinter desktop app to merge and upload IESCO billing DAT files into Oracle DB, with progress bars and date filters.",
    tech: ["Python", "Tkinter", "OracleDB", "pyodbc", "Threading", "tkcalendar"],
    link: "https://github.com/yourusername/iesco-dat-file-merger" // Replace with your repo or demo link
  },


];

const Projects = () => {
  return (
    <section id="projects" className="bg-dark text-light min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#38BDF8] mb-10 border-b border-gray-800 pb-4">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 text-[#38BDF8] px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#38BDF8] hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;
