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
      image: '/LuLusin.jpeg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
      liveLink: 'https://ecommerce.example.com',
      githubLink: 'https://github.com/your-repo/ecommerce',
    },
    {
      id: 2,
      title: 'AI Content Generator',
      type: 'website',
      description: 'An intelligent web application that leverages OpenAI APIs to generate diverse marketing content, from blog posts to social media captions, boosting productivity.',
      image: '/assets/projects/ai-generator-mockup.jpg', // Placeholder, replace with actual image
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Firebase Functions', 'Firestore'],
      liveLink: 'https://ai-generator.example.com', // Replace with actual link
      githubLink: 'https://github.com/your-repo/ai-generator', // Replace with actual link
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
    {
      id: 4,
      title: 'Real-time Chat Application',
      type: 'mobile',
      description: 'A real-time chat application with group chats, private messaging, and user presence indicators, built for instant communication.',
      image: '/assets/projects/chat-app-mockup.jpg', // Placeholder, replace with actual image
      technologies: ['React', 'Socket.IO', 'Node.js', 'Express', 'Redis', 'WebSockets'],
      liveLink: 'https://chat-app.example.com', // Replace with actual link
      githubLink: 'https://github.com/your-repo/chat-app', // Replace with actual link
    },
    {
      id: 5,
      title: 'Dev Portfolio Template',
      type: 'website',
      description: 'A highly customizable and performant personal portfolio template designed for developers, featuring modern UI/UX and SEO optimization.',
      image: '/assets/projects/portfolio-template-mockup.jpg', // Placeholder, replace with actual image
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
      liveLink: 'https://portfolio-template.example.com', // This very portfolio!
      githubLink: 'https://github.com/your-repo/portfolio-template',
    },
    {
      id: 6,
      title: 'Travel Planning App',
      type: 'mobile',
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

  // Separate projects by type
  const websiteProjects = projects.filter(project => project.type === 'website');
  const mobileProjects = projects.filter(project => project.type === 'mobile');

  const ProjectSection = ({ title, projects }: ProjectSectionProps) => (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-true-blue dark:text-mustard-seed">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project: Project) => (
          <motion.div
            key={project.id}
            className="bg-mustard-seed dark:bg-gray-800 rounded-xl shadow-lg flex flex-col overflow-hidden border border-true-blue dark:border-gray-700 cursor-pointer relative group"
            variants={projectCardVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-full overflow-hidden relative ${project.type === 'mobile' ? 'bg-black aspect-w-9 aspect-h-16' : 'aspect-video'}`}>
              <motion.img
                src={project.image}
                alt={project.title}
                className={`w-full h-full transition-transform duration-300 ${project.type === 'mobile' ? 'object-contain' : 'object-cover'}`}
                variants={imageHoverVariants}
              />
              {/* Overlay for description on hover */}
              <div className={`absolute inset-0 p-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto flex flex-col
                ${project.type === 'mobile' && project.id === 3
                  ? 'bg-dark-purple justify-start items-start text-left'
                  : 'bg-white justify-start items-center text-center' // Changed to white background for LuLusin
                }`
              }>
                {project.type === 'mobile' && project.id === 3 ? (
                  <>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <h4 className="text-sm font-bold mb-2">Tentang Aplikasi</h4>
                    <div className="w-full h-24 mb-4 flex items-center justify-center bg-gray-900 rounded-md overflow-hidden">
                      <img src={project.image} alt="Forklift Mobile" className="object-contain h-full" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Forklift Mobile</h3>
                    <span className="bg-rose-500 text-white px-2 py-0.5 rounded-full text-xs mb-3">Versi 1.0.0</span>
                    <p className="text-[0.65rem] md:text-xs leading-tight mb-2">
                      Forklit! Mobile adalah aplikasi yang memudahkan pengguna dalam mengelola dan memesan layanan forklift. Dengan aplikasi ini, Anda dapat melihat daftar unit forklift yang tersedia, melakukan pemesanan baru, melacak riwayat pemesanan, dan memberikan feedback untuk layanan yang telah digunakan.
                    </p>
                    <strong className="text-rose-500 text-xs md:text-sm font-bold mt-2 mb-2">Fitur Utama</strong>
                    <ul className="text-[0.65rem] md:text-xs leading-tight w-full mb-4">
                      <li className="flex items-center mb-1 bg-gray-800 p-2 rounded-md"><span className="mr-2 text-white">&#8226;</span> Daftar Unit: Lihat daftar unit forklift yang tersedia</li>
                      <li className="flex items-center mb-1 bg-gray-800 p-2 rounded-md"><span className="mr-2 text-white">&#8226;</span> Pemesanan Baru: Buat pemesanan forklift baru</li>
                      <li className="flex items-center mb-1 bg-gray-800 p-2 rounded-md"><span className="mr-2 text-white">&#8226;</span> Riwayat Pemesanan: Lihat riwayat pemesanan Anda</li>
                      <li className="flex items-center bg-gray-800 p-2 rounded-md"><span className="mr-2 text-white">&#8226;</span> Feedback: Berikan masukan untuk layanan kami</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-true-blue text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm dark:bg-gray-700 dark:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                ) : project.type === 'website' && project.id === 1 ? (
                  <div className="flex flex-col items-center justify-start text-center h-full w-full">
                    {/* Top Bar with Logo and Navigation */}
                    <div className="w-full bg-true-blue py-3 px-6 flex items-center justify-between text-white">
                      <div className="font-bold text-lg">LuLusin <span className="font-normal text-sm">Education Academi</span></div>
                      <div className="flex space-x-4 text-sm font-semibold">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Tutorial</a>
                        <a href="#" className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition-colors">Login</a>
                      </div>
                    </div>

                    {/* Main Hero Section */}
                    <div className="w-full flex-grow flex items-center justify-center p-8" style={{ backgroundColor: '#F5F5F5' }}> {/* Light background color */}
                      <div className="max-w-4xl w-full flex items-center justify-between space-x-8 text-dark-purple">
                        <h2 className="text-xl md:text-3xl font-bold leading-tight max-w-md text-left">Besiaplah Menempuh Jenjang Pendidikan Yang Lebih Tinggi</h2>
                        <div className="w-48 h-48 rounded-full flex items-center justify-center overflow-hidden"> {/* Removed bg-gray-300 */}
                          <img src="/LuLusin.jpeg" alt="LuLusin Illustration" className="object-cover w-full h-full" /> {/* Added actual image */}
                        </div>
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="w-full bg-true-blue p-8 text-white">
                      <h3 className="text-lg font-bold mb-6 text-center">Tata cara penggunaan aplikasi</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg text-left">
                          <Check className="text-mustard-seed text-3xl mb-2" />
                          <h4 className="text-base font-bold mb-1">Learning Untuk Lulus Seleksi Nasional</h4>
                          <p className="text-xs leading-tight">Persiapan SNBT kini lebih mudah dan terarah! Dengan materi lengkap, tryout interaktif, serta analisis skor yang akurat, LuLusin siap membantumu melewati seleksi masuk perguruan tinggi dengan percaya diri.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg text-left">
                          <Users className="text-mustard-seed text-3xl mb-2" />
                          <h4 className="text-base font-bold mb-1">Learning Untuk Lulus Seleksi Nasional</h4>
                          <p className="text-xs leading-tight">Persiapan SNBT kini lebih mudah dan terarah! Dengan materi lengkap, tryout interaktif, serta analisis skor yang akurat, LuLusin siap membantumu melewati seleksi masuk perguruan tinggi dengan percaya diri.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg text-left">
                          <List className="text-mustard-seed text-3xl mb-2" />
                          <h4 className="text-base font-bold mb-1">Seluruh Materi SNBT</h4>
                          <p className="text-xs leading-tight">Belajar lebih mudah dengan kurikulum lengkap yang dirancang untuk menghadapi SNBT dengan percaya diri.</p>
                        </div>
                        {/* Feature 4 */}
                        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg text-left">
                          <Clipboard className="text-mustard-seed text-3xl mb-2" />
                          <h4 className="text-base font-bold mb-1">Tryout Interaktif & Pencatatan Skor</h4>
                          <p className="text-xs leading-tight">Latih kemampuanmu dengan tryout SNBT dan pantau perkembangan skor setiap sesi.</p>
                        </div>
                      </div>
                    </div>

                    {/* Technologies at the very bottom (optional for LuLusin overlay) */}
                    <div className="w-full bg-true-blue p-4 flex flex-wrap gap-2 justify-center mt-auto">
                      {project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-true-blue text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm dark:bg-gray-700 dark:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold mb-3 text-white leading-tight">{project.title}</h3>
                    <p className="text-[0.7rem] md:text-xs leading-tight flex-grow mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-true-blue text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm dark:bg-gray-700 dark:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                
              </div>
              <div className="flex flex-wrap gap-4 mt-auto"> {/* mt-auto pushes links to bottom */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-true-blue text-white px-5 py-2.5 rounded-full font-semibold hover:bg-mustard-seed hover:text-true-blue transition-colors duration-300 shadow-md group dark:bg-gray-700 dark:text-white dark:hover:bg-true-blue dark:hover:text-mustard-seed"
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
                    className="inline-flex items-center text-true-blue border border-true-blue px-5 py-2.5 rounded-full font-semibold hover:bg-mustard-seed hover:text-true-blue transition-colors duration-300 group dark:text-gray-300 dark:border-gray-500 dark:hover:bg-true-blue dark:hover:text-mustard-seed"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    GitHub <Github className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
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