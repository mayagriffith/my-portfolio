import React, { useState } from 'react';

// Sample project data (you can replace this with your actual project data)
const projectsData = [
  {
    id: 1,
    title: 'My Bots',
    description: 'Created for an Evolutionary Robotics Class. Used a python physics simulator to create a robot. Used different numbers of hidden neurons to determine how best the evolutionary algorithm could create a robot that could walk.',
    imageUrl: '/robot.png',
    largeImageUrl: '/robot.png',
    skills: ['Python', 'Evolutionary Algorithms', 'Neural Networks', 'Robotics', 'Physics'],
    link: 'https://www.youtube.com/watch?v=ahmDUK0I_Fo',
  },
  {
    id: 2,
    title: 'HCI-Friendly Language Learning App',
    description: 'Description for Project 1.',
    imageUrl: '/language.png',
    largeImageUrl: '/language.png',
    skills: ['React', 'Node.js', 'CSS'],
    link: 'https://example.com/project1',
  },
  {
    id: 3,
    title: 'SQL POS System',
    description: 'Description for Project 1.',
    imageUrl: '/pet.png',
    largeImageUrl: '/pet.png',
    skills: ['SQL', 'Databases', 'CSS'],
    link: 'https://example.com/project1',
  },
  {
    id: 4,
    title: 'Healing Leaves: CycleGAN Implementation',
    description: 'Description for Project 1.',
    imageUrl: '/leaf3.png',
    largeImageUrl: '/leaf3.png',
    skills: ['AI', 'GANs', 'pytorch', 'python', 'training', 'research'],
    link: 'https://example.com/project1',
  },
  {
    id: 5,
    title: 'Cryptocurrency System and Interface',
    description: 'Description for Project 1.',
    imageUrl: '/crypto.png',
    largeImageUrl: '/crypto.png',
    skills: ['Cryptocurrency', 'Python', 'Blockchain'],
    link: 'https://www.youtube.com/watch?v=TQdrEWTbIS0&t=24s&ab_channel=MayaGriffith',
  },
  {
    id: 6,
    title: 'SWiCS Website',
    description: 'Description for Project 1.',
    imageUrl: '/swics.png',
    largeImageUrl: '/swics.png',
    skills: ['SQL', 'Databases', 'CSS'],
    link: 'https://example.com/project1',
  },
  {
    id: 7,
    title: 'Model of Self-Checkout System',
    description: 'A model of the efficiency of traditional checkouts vs self checkouts​ using cellular automata​.',
    imageUrl: '/model.png',
    largeImageUrl: '/model.png',
    skills: ['Python', 'Modeling', 'Data Analysis', 'Research', 'Cellular Automata'],
    link: 'https://docs.google.com/document/d/1V1IES76iS9mI8swTEqk-1lO3llrErwrD/edit?usp=sharing&ouid=110237877314434321395&rtpof=true&sd=true',
  },
  {
    id: 8,
    title: 'This Portfolio',
    description: 'Created a portfolio website for myself using React and Tailwind CSS.',
    imageUrl: '/thisws.png',
    largeImageUrl: '/thisws.png',
    skills: ['React', 'Tailwind', 'Web Development', 'Design', 'Figma'],
    link: 'https://example.com/project1',
  },
  {
    id: 9,
    title: 'Geometry Dash',
    description: 'Models a famous single-player mobile game. Player moves to the side at a constant speed and has to jump to avoid obstacles. Object of the game is to get to the end of the level without crashing into a block. Player restarts until the level is completed Score is tracked by the number of seconds the player has been playing and tries. Used Python Arcade and Tiled Editor to create the level.',
    imageUrl: '/geometry.png',
    largeImageUrl: '/geometry.png',
    skills: ['Python', 'Python Arcade', 'Software ', 'Game Development', 'Graphics'],
    link: 'https://www.youtube.com/watch?v=ahmDUK0I_Fo',
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
      <h1 className="text-4xl font-bold mb-8 text-pink-700">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8 pl-4 pr-4">
        {projectsData.map((project) => (
          <div
          key={project.id}
          className="relative overflow-hidden w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-8 cursor-pointer rounded shadow-xl hover:shadow-2xl transition duration-300"
          onClick={() => handleProjectClick(project.id)}
        >
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white font-semibold text-xl">{project.title}</p>
          </div>
        </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 relative w-1/2">
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