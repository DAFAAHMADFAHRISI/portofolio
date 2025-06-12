import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"; // Remove Sun and Moon icons
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const Home = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with secure payment processing and efficient inventory management. Built for scalability and a seamless user experience.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Node.js"],
      image: "/placeholder.svg?height=200&width=400",
      link: "/portfolio/ecommerce",
    },
    {
      id: 2,
      title: "AI Content Generator",
      description:
        "An innovative AI-powered application designed to generate engaging marketing content from user prompts, significantly boosting productivity for content creators.",
      tags: ["React", "Node.js", "OpenAI", "MongoDB", "Express"],
      image: "/placeholder.svg?height=200&width=400",
      link: "/portfolio/ai-generator",
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description:
        "A comprehensive mobile-first application that empowers users to track workouts, monitor nutrition, and visualize health metrics, fostering a healthier lifestyle.",
      tags: ["React Native", "Firebase", "Redux", "Charts", "Expo"],
      image: "/placeholder.svg?height=200&width=400",
      link: "/portfolio/fitness-tracker",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "GraphQL",
    "PostgreSQL",
    "AWS",
    "Docker",
    "MongoDB",
    "Express.js",
    "Figma",
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for individual items (e.g., skills, projects)
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Add typing animation variants
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
      },
    }),
  };

  // Split name into characters for typing animation
  const name = "Dafa Ahmad Fahrisi";
  const nameChars = name.split("");

  return (
    <main className="w-screen min-h-screen bg-mustard-seed font-sans text-true-blue dark:bg-gray-900 dark:text-gray-50 transition-colors duration-500">
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-true-blue to-mustard-seed text-white shadow-lg dark:from-gray-800 dark:to-gray-950 transition-colors duration-500"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-4xl text-center">
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-md opacity-75 animate-pulse-slow dark:from-gray-600 dark:to-gray-700"></div>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatePresence>
              {nameChars.map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={typingVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </AnimatePresence>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-mustard-seed dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-mustard-seed mb-10 max-w-2xl mx-auto leading-relaxed dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            I craft elegant, user-friendly web applications with modern technologies. Focused on creating exceptional
            digital experiences that solve real problems with clean, efficient code.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-5 justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-white text-true-blue px-8 py-4 rounded-full shadow-lg hover:bg-mustard-seed hover:text-white transition-all duration-300 font-bold text-lg group dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-gray-100"
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border border-white text-white px-8 py-4 rounded-full hover:bg-mustard-seed hover:text-true-blue transition-colors duration-300 font-bold text-lg dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Contact Me
            </Link>
          </motion.div>
          <motion.div
            className="flex space-x-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <a
              href="https://github.com/your-github-profile" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-mustard-seed transition-colors duration-300 transform hover:scale-110 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-mustard-seed transition-colors duration-300 transform hover:scale-110 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:your.email@example.com" // Replace with your email address
              className="p-3 text-white hover:text-mustard-seed transition-colors duration-300 transform hover:scale-110 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Email Me"
            >
              <Mail className="h-7 w-7" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white shadow-inner dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-14 text-gray-800 dark:text-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            My <span className="text-true-blue dark:text-mustard-seed">Skills</span>
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-mustard-seed text-true-blue text-base py-3 px-6 rounded-full border border-true-blue hover:bg-true-blue hover:text-white transition-all duration-300 font-medium shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-500"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-4 text-gray-800 dark:text-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            Featured <span className="text-true-blue dark:text-mustard-seed">Projects</span>
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-14 text-lg max-w-xl mx-auto dark:text-gray-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            A selection of my recent work, showcasing my skills across various technologies and industries. Each project
            reflects my commitment to quality and problem-solving.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 leading-tight dark:text-gray-100">{project.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed text-base dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-mustard-seed text-true-blue text-sm py-1.5 px-3 rounded-full border border-true-blue font-medium dark:bg-teal-700 dark:text-teal-200 dark:border-teal-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-true-blue hover:text-mustard-seed font-semibold transition-colors duration-200 group text-lg dark:text-yellow-400 dark:hover:text-yellow-300"
                  >
                    View Project <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-white text-true-blue px-8 py-4 rounded-full border border-true-blue hover:bg-mustard-seed hover:text-white transition-colors duration-300 font-bold text-lg shadow-md group dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              View All Projects <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-true-blue to-mustard-seed text-white shadow-xl dark:from-gray-900 dark:to-black transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            Ready to start your project?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            I'm currently available for freelance work and exciting collaborations. Let's create something amazing
            together that makes an impact.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-true-blue px-10 py-5 rounded-full shadow-lg hover:bg-mustard-seed hover:text-white transition-all duration-300 font-bold text-xl transform hover:scale-105 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-gray-100"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;