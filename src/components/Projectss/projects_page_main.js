import React from "react";
import { NavLink } from "react-router-dom";

import childrenImage1 from "../../assets/children1.jpeg";

const ProjectsPageMain = () => {
  // Sample data for projects
  const projects = [
    {
      title: "Life Skill Development",
      description:
        "As a passionate and skilled IT team since 2016, from Germany and Sri Lanka, we value our people for their creativity, competence, and dedication to building great tech.",
      imageUrl: childrenImage1, 
    },
    {
      title: "Disability Programs",
      description:
        "We value our people for their creativity, competence, dedication to building great tech, and pride in contributing to our clients’ software solutions.",
      imageUrl: childrenImage1,
    },
    {
      title: "Economic Empowerment",
      description:
        "We are dedicated to building great tech and pride in contributing to our clients’ software solutions.",
      imageUrl: childrenImage1,
    },
  ];

  return (
    <div className="bg-white min-h-screen p-8">
      {/* Title and description */}
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Our Projects</h1>
      <p className="text-center text-green-600 text-lg leading-loose mb-20">
        Know about our latest Projects
      </p>

      {/* Project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-16 lg:px-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col max-w-[90%] mx-auto"
          >
            {/* Image */}
            <div className="w-full">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-48 sm:h-56 md:h-72"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-600 mt-4">{project.description}</p>
              <NavLink
                to={`/projects/${index}`} // Adjust route as needed
                className="mt-6 hover:text-green-700 font-medium text-green-600"
              >
                View Projects
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPageMain;
