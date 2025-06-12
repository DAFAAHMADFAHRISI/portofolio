import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const skills = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Figma",
];

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one.",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Node.js"],
    link: "/projects/1",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two.",
    image: "https://via.placeholder.com/300",
    tags: ["JavaScript", "CSS"],
    link: "/projects/2",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of project three.",
    image: "https://via.placeholder.com/300",
    tags: ["React", "MongoDB"],
    link: "/projects/3",
  },
];

const About = () => {
  return (
    <main className="min-h-screen  w-screen bg-mustard-seed dark:bg-gray-900 text-true-blue dark:text-white transition-colors duration-500">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center py-32 px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          {"Dafa Ahmad Fahrisi".split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={itemVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-true-blue dark:text-gray-300 mb-10"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          custom={1.2}
        >
          I'm a Frontend Developer passionate about creating beautiful and functional web experiences.
        </motion.p>
        <motion.div
          className="flex gap-4"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          custom={1.4}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-true-blue text-white rounded-full hover:bg-mustard-seed hover:text-true-blue transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-true-blue text-true-blue rounded-full hover:bg-mustard-seed hover:text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
        <motion.div className="mt-10 flex gap-4 justify-center">
          <a
            href="https://github.com/"
            className="p-3 text-true-blue hover:text-mustard-seed transition-colors duration-300 transform hover:scale-110 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="GitHub"
          >
            <Github className="h-7 w-7" />
          </a>
          <a
            href="https://linkedin.com/"
            className="p-3 text-true-blue hover:text-mustard-seed transition-colors duration-300 transform hover:scale-110 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a
            href="https://instagram.com/"
            className="p-3 text-true-blue hover:text-mustard-seed transition-colors duration-300 transform hover:scale-110 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Instagram"
          >
            <Instagram className="h-7 w-7" />
          </a>
          <a
            href="mailto:dafa@example.com"
            className="p-3 text-true-blue hover:text-mustard-seed transition-colors duration-300 transform hover:scale-110 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Email Me"
          >
            <Mail className="h-7 w-7" />
          </a>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-mustard-seed dark:bg-gray-800 transition-colors duration-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-5 py-2 rounded-full bg-true-blue text-white dark:bg-gray-700 dark:text-white shadow"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-true-blue dark:bg-gray-900 transition-colors duration-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">Featured Projects</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="rounded-lg shadow-lg overflow-hidden bg-mustard-seed dark:bg-gray-800 transition-colors duration-300"
                variants={itemVariants}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-true-blue dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-true-blue text-white rounded-full dark:bg-gray-700 dark:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-true-blue dark:text-indigo-300 hover:underline font-medium"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default About;
