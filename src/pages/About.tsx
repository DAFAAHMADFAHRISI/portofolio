import { motion } from 'framer-motion';
import ReactLogo from '../assets/icons/react-original.svg';
import JavaScriptLogo from '../assets/icons/javascript-original.svg';
import TypeScriptLogo from '../assets/icons/typescript-original.svg';
import HTML5Logo from '../assets/icons/html5-original.svg';
import CSS3Logo from '../assets/icons/css3-original.svg';
import JavaLogo from '../assets/icons/java-original.svg';
import PythonLogo from '../assets/icons/python-original.svg';

// RustLogo fallback ke ReactLogo
const RustLogo = ReactLogo;
import NodejsLogo from '../assets/icons/nodejs-original.svg';
import ExpressLogo from '../assets/icons/express-original.svg';
import MongoDBLogo from '../assets/icons/mongodb-original.svg';
import OracleLogo from '../assets/icons/oracle-original.svg';
import PostgreSQLLogo from '../assets/icons/postgresql-original.svg';
// AWSLogo fallback ke ReactLogo
const AWSLogo = ReactLogo;
import DebianLogo from '../assets/icons/debian-original.svg';
import FlutterLogo from '../assets/icons/flutter-original.svg';
import FigmaLogo from '../assets/icons/figma-original.svg';
import DartLogo from '../assets/icons/dart-original.svg';
// KafkaLogo fallback ke ReactLogo

const About = () => {
  // Define skills with their corresponding image paths
  // Map these to the image_cce93d.png file
  const skillsData = [
    { name: 'React', icon: ReactLogo },
    { name: 'JavaScript', icon: JavaScriptLogo },
    { name: 'TypeScript', icon: TypeScriptLogo },
    { name: 'HTML5', icon: HTML5Logo },
    { name: 'CSS3', icon: CSS3Logo },
    { name: 'Java', icon: JavaLogo },
    { name: 'Python', icon: PythonLogo },
    { name: 'Rust', icon: RustLogo },
    { name: 'Node.js', icon: NodejsLogo },
    { name: 'Express.js', icon: ExpressLogo },
    { name: 'MongoDB', icon: MongoDBLogo },
    { name: 'Oracle', icon: OracleLogo },
    { name: 'PostgreSQL', icon: PostgreSQLLogo },
    { name: 'AWS', icon: AWSLogo },
    { name: 'Debian', icon: DebianLogo },
    { name: 'Flutter', icon: FlutterLogo },
    { name: 'Figma', icon: FigmaLogo },
    { name: 'Dart', icon: DartLogo },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.2 } },
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-16 text-indigo-800 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-purple-600">Me</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Who I Am Section */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6 text-indigo-700 border-b-2 border-purple-400 pb-2 inline-block"
              variants={itemVariants}
            >
              Who I Am
            </motion.h2>
            <motion.p className="text-lg text-gray-700 mb-6 leading-relaxed" variants={itemVariants}>
              I am a passionate Full Stack Developer dedicated to building intuitive and performant web applications.
              My journey in software development is driven by a deep curiosity for technology and a commitment
              to crafting seamless digital experiences.
            </motion.p>
            <motion.p className="text-lg text-gray-700 leading-relaxed" variants={itemVariants}>
              Beyond coding, I enjoy exploring new technological frontiers, contributing to open-source projects,
              and sharing insights through technical articles. I believe in continuous learning and leveraging
              technology to solve real-world problems.
            </motion.p>
          </motion.div>

          {/* My Skills Section */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-6 text-indigo-700 border-b-2 border-purple-400 pb-2 inline-block"
              variants={itemVariants}
            >
              My Skills
            </motion.h2>
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
              variants={containerVariants} // Apply stagger to the grid itself
            >
              {skillsData.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-indigo-50 transition-colors duration-200 cursor-pointer"
                  variants={skillIconVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={skill.icon} alt={skill.name} className="h-10 w-10 mb-2 object-contain" />
                  <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Education & Experience Section */}
        <motion.div
          className="mt-20 p-8 rounded-xl shadow-lg bg-white border border-gray-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-indigo-700 border-b-2 border-purple-400 pb-2 inline-block"
            variants={itemVariants}
          >
            Education & Experience
          </motion.h2>
          <div className="space-y-8">
            <motion.div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Bachelor of Computer Science</h3>
              <p className="text-indigo-600 font-semibold mb-2">University Name, 2018-2022</p>
              <p className="text-gray-700 leading-relaxed">
                Specialized in Software Engineering and Web Development. Gained strong theoretical foundations
                and practical skills in algorithms, data structures, and system design. Graduated with honors.
              </p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Senior Full Stack Developer</h3>
              <p className="text-indigo-600 font-semibold mb-2">Company Name, 2022-Present</p>
              <p className="text-gray-700 leading-relaxed">
                Led the development of scalable enterprise-level web applications, focusing on React, Node.js,
                and cloud infrastructure (AWS). Collaborated with cross-functional teams to deliver high-quality,
                impactful software solutions.
              </p>
            </motion.div>

            {/* Add more experience or education entries as needed */}
            <motion.div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Freelance Web Developer</h3>
              <p className="text-indigo-600 font-semibold mb-2">Self-employed, 2021-Present</p>
              <p className="text-gray-700 leading-relaxed">
                Executed diverse projects for clients, ranging from custom business websites to e-commerce platforms.
                Managed full project lifecycle from conceptualization to deployment, ensuring client satisfaction and
                technical excellence.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;