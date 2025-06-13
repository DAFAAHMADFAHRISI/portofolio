import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Check, Users, List, Clipboard } from 'lucide-react'; // Icons for project links

interface Project {
  id: number;
  title: string;
  type: 'website' | 'mobile';
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

interface ProjectSectionProps {
  title: string;
  projects: Project[];
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'LuLusin Education Academy',
      type: 'website',
      description: 'Persiapan SNBT kini lebih mudah dan terarah! Dengan materi lengkap, tryout interaktif, serta analisis skor yang akurat, LuLusin siap membantumu melewati seleksi masuk perguruan tinggi dengan percaya diri.',
      image: '/assets/projects/LuLusin.jpeg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
      liveLink: 'https://ecommerce.example.com',
      githubLink: 'https://github.com/DAFAAHMADFAHRISI/LuLuSin-FrontEnd',
    },
    {
      id: 3,
      title: 'Health & Fitness Tracker',
      type: 'mobile',
      description: 'A mobile-first progressive web app (PWA) for tracking workouts, nutrition, and personal health metrics, featuring intuitive data visualization and goal setting.',
      image: '/assets/projects/forklift-mobile.jpg',
      technologies: ['Vue.js', 'Vite', 'PWA', 'GraphQL', 'PostgreSQL', 'Apollo Client', 'Chart.js'],
      liveLink: 'https://fitness-tracker.example.com',
      githubLink: 'https://github.com/DAFAAHMADFAHRISI/Mobile-Forklift',
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

  // Separate projects by type
  const websiteProjects = projects.filter(project => project.type === 'website');
  const mobileProjects = projects.filter(project => project.type === 'mobile');

  const ProjectSection = ({ title, projects }: ProjectSectionProps) => (
    <motion.div
      className="mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-2xl font-bold mb-8 text-center text-true-blue dark:text-mustard-seed">{title}</h2>
      <div className={`grid grid-cols-1 gap-10 ${projects.length === 1 ? 'md:grid-cols-1 max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
        {projects.map((project: Project) => (
          <motion.div
            key={project.id}
            className={`bg-mustard-seed dark:bg-gray-800 rounded-xl shadow-lg flex flex-col overflow-hidden border border-true-blue dark:border-gray-700 relative group mx-auto ${project.type === 'mobile' ? 'max-w-lg' : 'max-w-md'}`}
            variants={projectCardVariants}
          >
            {/* Common Image Container */}
            <div className={`w-full overflow-hidden relative ${project.type === 'mobile' ? 'bg-black aspect-w-9 aspect-h-16' : 'aspect-video'}`}> 
              <motion.img
                src={project.image}
                alt={project.title}
                className={`w-full h-full transition-transform duration-300 ${project.type === 'mobile' ? 'object-contain' : 'object-cover'}`}
              />
            </div>

            {/* Common Links Container (always visible below image/overlay) */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-true-blue border border-true-blue px-5 py-2.5 rounded-full font-semibold hover:bg-mustard-seed hover:text-true-blue transition-colors duration-300 group dark:text-gray-300 dark:border-gray-500 dark:hover:bg-true-blue dark:hover:text-mustard-seed"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    GitHub <Github className="ml-2 h-4 w-4 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-mustard-seed to-true-blue dark:from-gray-900 dark:to-black py-16 px-4 sm:px-6 lg:px-8 font-sans text-true-blue dark:text-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-6 text-true-blue dark:text-mustard-seed tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-mustard-seed">Portfolio</span>
        </motion.h1>
        <motion.p
          className="text-xl text-true-blue dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A showcase of my recent work, highlighting my expertise in full-stack development and passion for creating impactful digital solutions.
        </motion.p>

        <ProjectSection title="Website Projects" projects={websiteProjects} />
        <ProjectSection title="Mobile Projects" projects={mobileProjects} />

        {/* Optional: Call to action for more projects or contact */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <p className="text-xl text-true-blue dark:text-gray-300 mb-6">
            Looking for more? Explore all my projects or let's discuss your next idea!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-true-blue text-white px-8 py-4 rounded-full shadow-lg hover:bg-mustard-seed hover:text-true-blue transition-colors duration-300 font-bold text-lg transform hover:scale-105 dark:bg-gray-700 dark:text-white dark:hover:bg-true-blue dark:hover:text-mustard-seed"
          >
            Let's Collaborate!
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;