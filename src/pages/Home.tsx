import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import PhotoshopIcon from '../assets/icons/photoshop.svg';
import PremiereIcon from '../assets/icons/premierepro.svg';
import LightroomIcon from '../assets/icons/lightroom.svg';
import IllustratorIcon from '../assets/icons/illustrator.svg';
import SvelteIcon from '../assets/icons/svelte.svg';
import AfterEffectsIcon from '../assets/icons/aftereffects.svg';
import FigmaIcon from '../assets/icons/figma-original.svg';
import StrapiIcon from '../assets/icons/strapi.svg';
import PostgresSQLIcon from '../assets/icons/postgresql-original.svg';
import NextjsIcon from '../assets/icons/nextjs.svg';
import ReduxIcon from '../assets/icons/redux.svg';
import RedisIcon from '../assets/icons/redis.svg';
import GoIcon from '../assets/icons/go.svg';
import MongoDBIcon from '../assets/icons/mongodb.svg';
import TypeScriptIcon from '../assets/icons/typescript-original.svg';
import NodejsIcon from '../assets/icons/nodejs-original.svg';
import ReactIcon from '../assets/icons/react-original.svg';
import JavascriptIcon from '../assets/icons/javascript-original.svg';
import DafaImage from '../../public/assets/projects/dafa.png';

const Home = () => {
  const skillsData = [
    { name: "TypeScript", icon: "TypeScript" },
    { name: "Photoshop", icon: "Photoshop" },
    { name: "Premiere", icon: "Premiere" },
    { name: "Lightroom", icon: "Lightroom" },
    { name: "Illustrator", icon: "Illustrator" },
    { name: "Node.js", icon: "Nodejs" },
    { name: "React", icon: "React" },
    { name: "Svelte", icon: "Svelte" },
    { name: "After Effects", icon: "AfterEffects" },
    { name: "Figma", icon: "Figma" },
    { name: "Strapi", icon: "Strapi" },
    { name: "PostgreSQL", icon: "PostgreSQL" },
    { name: "Next.js", icon: "Nextjs" },
    { name: "JavaScript", icon: "Javascript" },
    { name: "Redux", icon: "Redux" },
    { name: "Redis", icon: "Redis" },
    { name: "Go", icon: "Go" },
    { name: "MongoDB", icon: "MongoDB" },
  ];

  const SkillIconMap: { [key: string]: string } = {
    TypeScript: TypeScriptIcon,
    Photoshop: PhotoshopIcon,
    Premiere: PremiereIcon,
    Lightroom: LightroomIcon,
    Illustrator: IllustratorIcon,
    Nodejs: NodejsIcon,
    React: ReactIcon,
    Svelte: SvelteIcon,
    AfterEffects: AfterEffectsIcon,
    Figma: FigmaIcon,
    Strapi: StrapiIcon,
    PostgreSQL: PostgresSQLIcon,
    Nextjs: NextjsIcon,
    Javascript: JavascriptIcon,
    Redux: ReduxIcon,
    Redis: RedisIcon,
    Go: GoIcon,
    MongoDB: MongoDBIcon,
  };

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
    <main className="w-screen min-h-screen bg-gradient-to-br from-mustard-seed to-true-blue dark:from-gray-900 dark:to-black font-sans text-true-blue dark:text-gray-50 transition-colors duration-500 pt-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center p-8">

        {/* Hero Section - Left Box */}
        <motion.section
          className="relative flex flex-col items-start py-20 px-4 sm:px-6 lg:px-8 bg-white text-true-blue shadow-lg rounded-3xl lg:w-[55%] dark:bg-gray-700 dark:text-white transition-colors duration-500"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          {/* Gambar Dafa - Posisi absolut di kiri atas relatif terhadap Hero Section */}
          <motion.div
            className="absolute -top-20 left-[-2rem] w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800 z-20"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <img
              src={DafaImage}
              alt="Dafa Ahmad Fahrisi"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Main content of Hero Section */}
          <div className="max-w-4xl text-left pt-20">
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* REMOVED: This div was for a glowing circle, adjust if needed */}
              {/* <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-md opacity-75 animate-pulse-slow dark:from-gray-600 dark:to-gray-700"></div> */}
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-gray-900"
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
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed dark:text-gray-300"
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
                className="inline-flex items-center bg-true-blue text-white px-8 py-4 rounded-full shadow-lg hover:bg-mustard-seed hover:text-white transition-all duration-300 font-bold text-lg group dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:hover:text-gray-900"
              >
                View My Portfolio <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center border border-true-blue text-true-blue px-8 py-4 rounded-full hover:bg-mustard-seed hover:text-white transition-colors duration-300 font-bold text-lg dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 dark:hover:text-gray-950"
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
                className="p-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110 dark:text-gray-800 dark:hover:text-black"
                aria-label="GitHub Profile"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110 dark:text-gray-800 dark:hover:text-black"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href="mailto:your.email@example.com" // Replace with your email address
                className="p-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110 dark:text-gray-800 dark:hover:text-black"
                aria-label="Email Me"
              >
                <Mail className="h-7 w-7" />
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section - Right Box */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-3xl shadow-xl lg:w-[45%] dark:bg-gray-800 dark:bg-opacity-70 dark:border-gray-700 transition-colors duration-500 lg:-ml-16 z-10">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl font-extrabold text-center mb-14 text-white dark:text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionVariants}
            >
              My Skills
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
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
              {skillsData.map((skill, index) => {
                  const IconComponent = SkillIconMap[skill.icon];
                  return (
                    <motion.div
                      key={index}
                      className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900 border border-gray-700 shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 group overflow-hidden"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Glowing border effect - Placeholder for dynamic color based on skill */}
                      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{
                               background: 'linear-gradient(to right, #FFC0CB, #DA70D6, #9370DB, #6495ED, #40E0D0)', // Example gradient
                               filter: 'blur(8px)',
                               zIndex: -1
                           }}></div>

                      {/* Icon Component */}
                      {IconComponent && <img src={IconComponent} alt={skill.name} className="w-16 h-16 mb-2" />}
                      <span className="text-gray-200 text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
              })}
            </motion.div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;