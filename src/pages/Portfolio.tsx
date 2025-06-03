const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: '/project2.jpg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work',
      image: '/project3.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#'
    }
  ];

  return (
    <div className="w-screen min-h-screen py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  className="w-full block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center mt-2"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 