import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react'; // Icons for project links

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A robust full-stack e-commerce solution with secure payment integration and comprehensive inventory management, designed for a seamless user experience.',
      image: '/assets/projects/ecommerce-mockup.jpg', // Placeholder, replace with actual image
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
      liveLink: 'https://ecommerce.example.com', // Replace with actual link
      githubLink: 'https://github.com/your-repo/ecommerce', // Replace with actual link
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description: 'An intelligent web application that leverages OpenAI APIs to generate diverse marketing content, from blog posts to social media captions, boosting productivity.',
      image: '/assets/projects/ai-generator-mockup.jpg', // Placeholder, replace with actual image
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Firebase Functions', 'Firestore'],
      liveLink: 'https://ai-generator.example.com', // Replace with actual link
      githubLink: 'https://github.com/your-repo/ai-generator', // Replace with actual link
    },
    {
      id: 3,
      title: 'Health & Fitness Tracker',
      description: 'A mobile-first progressive web app (PWA) for tracking workouts, nutrition, and personal health metrics, featuring intuitive data visualization and goal setting.',
      image: '/assets/projects/fitness-tracker-mockup.jpg', // Placeholder, replace with actual image
      technologies: ['Vue.js', 'Vite', 'PWA', 'GraphQL', 'PostgreSQL', 'Apollo Client', 'Chart.js'],
      liveLink: 'https://fitness-tracker.example.com', // Replace with actual link
      githubLink: 'https://github.com/your-repo/fitness-tracker', // Replace with actual link
    },
    {
        id: 4,
        title: 'Real-time Chat Application',
        description: 'A real-time chat application with group chats, private messaging, and user presence indicators, built for instant communication.',
        image: '/assets/projects/chat-app-mockup.jpg', // Placeholder, replace with actual image
        technologies: ['React', 'Socket.IO', 'Node.js', 'Express', 'Redis', 'WebSockets'],
        liveLink: 'https://chat-app.example.com', // Replace with actual link
        githubLink: 'https://github.com/your-repo/chat-app', // Replace with actual link
    },
    {
        id: 5,
        title: 'Dev Portfolio Template',
        description: 'A highly customizable and performant personal portfolio template designed for developers, featuring modern UI/UX and SEO optimization.',
        image: '/assets/projects/portfolio-template-mockup.jpg', // Placeholder, replace with actual image
        technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
        liveLink: 'https://portfolio-template.example.com', // This very portfolio!
        githubLink: 'https://github.com/your-repo/portfolio-template',
    },
    {
        id: 6,
        title: 'Travel Planning App',
        description: 'An interactive web application helping users plan travel itineraries, discover attractions, and manage bookings with a clean, intuitive interface.',
        image: '/assets/projects/travel-app-mockup.jpg', // Placeholder, replace with actual image
        technologies: ['Angular', 'RxJS', 'Node.js', 'Google Maps API', 'Passport.js', 'JWT'],
        liveLink: 'https://travel-app.example.com', // Replace with actual link
        githubLink: 'https://github.com/your-repo/travel-app',
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
    hover: { scale: 1.03, boxShadow: '0px 10px 30px rgba(0,0,0,0.15)', transition: { duration: 0.2 } },
  };

  const imageHoverVariants = {
    hover: { scale: 1.1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-6 text-indigo-800 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-purple-600">Portfolio</span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A showcase of my recent work, highlighting my expertise in full-stack development and passion for creating impactful digital solutions.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15, // Delay between each project card animation
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-200 cursor-pointer"
              variants={projectCardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  variants={imageHoverVariants}
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 leading-tight">{project.title}</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-auto"> {/* mt-auto pushes links to bottom */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-purple-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-md group"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live Demo <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:rotate-6" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 border border-gray-300 px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 group"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      GitHub <Github className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Call to action for more projects or contact */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <p className="text-xl text-gray-700 mb-6">
            Looking for more? Explore all my projects or let's discuss your next idea!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 font-bold text-lg transform hover:scale-105"
          >
            Let's Collaborate!
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;