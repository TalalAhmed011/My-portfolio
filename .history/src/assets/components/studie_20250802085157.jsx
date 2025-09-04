import React from "react";

const studies = [
  {
    title: "Bachelor of Computer Science",
    institution: "National University of Modern Languages, Islamabad",
    year: "2021 - 2025",
    details: "Focused on Software Engineering, Data Structures, and Web Development.",
  },
  {
    title: "Intermediate in Pre-Engineering",
    institution: "Read Foudation Science College MZD",
    year: "2017 - 2019",
    details: "Maths, Physics, and Chemistry major.",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company: "Traid Evolution",
    year: "2024",
    details: "Worked with senior engineers to design and enhance UI/UX layouts using React and HT CSS.",
  },
  {
    title: "Web Developer (Intern)",
    company: "IESCO Projects",
    year: "2025 - continue",
    details: "Work with professional team and collaborate in there Data structure work and different module development.",
  },
];

const StudiesExperience = () => {
  return (
    <section id="studies-experience" className="bg-dark text-light py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">Studies & Experience</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Education</h3>
            {studies.map((item, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.institution} | {item.year}</p>
                <p className="mt-2 text-gray-300">{item.details}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Experience</h3>
            {experiences.map((item, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.company} | {item.year}</p>
                <p className="mt-2 text-gray-300">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudiesExperience;
