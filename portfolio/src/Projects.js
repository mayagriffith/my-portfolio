import React, { useState } from 'react';

// Sample project data (you can replace this with your actual project data)
const projectsData = [
  {
    id: 1,
    title: 'My Bots',
    description: 'Created for an Evolutionary Robotics Class. Used a python physics simulator to create a robot. Used different numbers of hidden neurons to determine how best the evolutionary algorithm could create a robot that could walk.',
    imageUrl: '/robot.png',
    largeImageUrl: '/robot.png',
    skills: ['Python', 'Evolutionary Algorithms', 'Neural Networks'],
    link: 'https://example.com/project1',
  },
  {
    id: 2,
    title: 'Project 1',
    description: 'Description for Project 1.',
    imageUrl: '/language.png',
    largeImageUrl: '/language.png',
    skills: ['React', 'Node.js', 'CSS'],
    link: 'https://example.com/project1',
  },
  {
    id: 3,
    title: 'Project 1',
    description: 'Description for Project 1.',
    imageUrl: '/pet.png',
    largeImageUrl: '/pet.png',
    skills: ['SQL', 'Databases', 'CSS'],
    link: 'https://example.com/project1',
  },
  {
    id: 4,
    title: 'Project 1',
    description: 'Description for Project 1.',
    imageUrl: '/swics.png',
    largeImageUrl: '/swics.png',
    skills: ['SQL', 'Databases', 'CSS'],
    link: 'https://example.com/project1',
  },
  {
    id: 5,
    title: 'Pin the Tail on the Donkey',
    description: 'Description for Project 1.',
    imageUrl: '/swics.png',
    largeImageUrl: '/swics.png',
    skills: ['SQL', 'Databases', 'CSS'],
    link: 'https://example.com/project1',
  },
  {
    id: 6,
    title: 'Capitals Game',
    description: 'Description for Project 1.',
    imageUrl: '/swics.png',
    largeImageUrl: '/swics.png',
    skills: ['SQL', 'Databases', 'CSS'],
    link: 'https://example.com/project1',
  },
  {
    id: 7,
    title: 'Geometry Dash',
    description: 'Description for Project 1.',
    imageUrl: '/swics.png',
    largeImageUrl: '/swics.png',
    skills: ['SQL', 'Databases', 'CSS'],
    link: 'https://example.com/project1',
  },
  {
    id: 8,
    title: 'This Portfolio',
    description: 'Description for Project 1.',
    imageUrl: '/swics.png',
    largeImageUrl: '/swics.png',
    skills: ['SQL', 'Databases', 'CSS'],
    link: 'https://example.com/project1',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    const project = projectsData.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="text-center m-0">
      <h1 className="text-3xl font-bold mb-8 text-pink-700">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-8 cursor-pointer"
            onClick={() => handleProjectClick(project.id)}
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white">{project.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 relative w-1/2"> {/* Adjust the width here */}
            <button className="absolute top-2 right-2 text-xl" onClick={handleProjectClose}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <img src={selectedProject.largeImageUrl} alt={selectedProject.title} className="mb-4" />
            <p className="mb-4">{selectedProject.description}</p>
            <p className="mb-4">Skills: {selectedProject.skills.join(', ')}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Visit Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;