import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, ArrowRight, Briefcase, GraduationCap, Code, Download } from "lucide-react";

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

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: 'August 2022 - Present',
    description: [
      'Spearheaded the development of scalable enterprise web applications using React, Node.js, and GraphQL, leading to a 30% improvement in load times.',
      'Mentored a team of 4 junior developers, fostering their growth and ensuring high code quality through comprehensive code reviews and best practices enforcement.',
      'Designed and implemented robust CI/CD pipelines with AWS and Docker, reducing deployment cycles by 50% and improving overall team efficiency.',
      'Collaborated with product management and design teams to translate business requirements into technical specifications and impactful features.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Digital Solutions Agency',
    period: 'January 2020 - July 2022',
    description: [
      'Developed and maintained highly responsive and accessible websites for over 15 diverse clients, utilizing modern front-end frameworks like Vue.js and React.',
      'Actively collaborated with UI/UX designers to implement pixel-perfect designs and enhance user experience based on feedback and analytics.',
      'Optimized website performance across various platforms by implementing lazy loading, image optimization, and efficient API calls, boosting Lighthouse scores by an average of 25%.',
      'Contributed to back-end development using Node.js and MongoDB, designing RESTful APIs and managing database interactions.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science (Cum Laude)',
    school: 'Leading Technology University',
    period: 'September 2016 - June 2020',
    description:
      'Focused on advanced software engineering principles, web application architecture, and database management. Completed a capstone project on AI-driven recommendation systems.',
  },
];

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Figma', 'Flutter'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'GraphQL', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Redis', 'Java', 'PHP', 'MySQL', 'SQLite'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Git', 'Docker', 'Kubernetes', 'AWS (EC2, S3, Lambda)', 'CI/CD', 'Nginx', 'Vercel'],
  },
  {
    category: 'Testing & Tools',
    items: ['Jest', 'React Testing Library', 'Webpack', 'Babel', 'Jira', 'Agile Methodologies', 'C++', 'C#'],
  },
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
    <main className="min-h-screen w-screen bg-gradient-to-br from-mustard-seed to-true-blue dark:from-gray-900 dark:to-black text-true-blue dark:text-white transition-colors duration-500">
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

      {/* Experience Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-mustard-seed dark:bg-gray-800 transition-colors duration-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white flex items-center">
            <Briefcase className="h-7 w-7 mr-3" /> Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-true-blue dark:text-white">{exp.title}</h3>
                <p className="text-mustard-seed font-semibold mb-1">{exp.company}</p>
                <p className="text-true-blue dark:text-gray-300 text-sm mb-4">{exp.period}</p>
                <ul className="list-disc pl-5 space-y-2 text-true-blue dark:text-gray-300 leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-true-blue dark:bg-gray-900 transition-colors duration-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white flex items-center">
            <GraduationCap className="h-7 w-7 mr-3" /> Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-true-blue dark:text-white">{edu.degree}</h3>
                <p className="text-mustard-seed font-semibold mb-1">{edu.school}</p>
                <p className="text-true-blue dark:text-gray-300 text-sm mb-4">{edu.period}</p>
                <p className="text-true-blue dark:text-gray-300 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-mustard-seed dark:bg-gray-800 transition-colors duration-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white flex items-center">
            <Code className="h-7 w-7 mr-3" /> Skills
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                variants={itemVariants}
              >
                <h3 className="text-lg font-bold mb-4 text-true-blue dark:text-white">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-true-blue text-white rounded-full text-sm dark:bg-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">Featured Projects</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-700 transition-colors duration-300"
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
                        className="text-xs px-3 py-1 bg-true-blue text-white rounded-full dark:bg-gray-600"
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

      {/* Download Resume Button */}
      <motion.div
        className="py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <a
          href="/Dafa_Ahmad_Fahrisi_Resume.pdf"
          className="inline-flex items-center bg-black text-mustard-seed px-8 py-4 rounded-full shadow-lg hover:bg-true-blue hover:text-white transition-all duration-300 font-bold text-lg transform hover:scale-105 group dark:bg-gray-700 dark:text-white dark:hover:bg-true-blue dark:hover:text-mustard-seed"
          download="Dafa_Ahmad_Fahrisi_Resume.pdf"
          aria-label="Download Full Resume (PDF)"
        >
          <Download className="h-6 w-6 mr-3 text-mustard-seed transition-transform group-hover:rotate-6 dark:text-white" />
          Download Full Resume
        </a>
      </motion.div>
    </main>
  );
};

export default About;
