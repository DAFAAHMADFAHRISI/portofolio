import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code } from 'lucide-react'; // Icons for visual appeal

const Resume = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.', // More specific company name
      period: 'August 2022 - Present', // Specific dates
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
      degree: 'Bachelor of Computer Science (Cum Laude)', // Added distinction
      school: 'Leading Technology University', // More specific school name
      period: 'September 2016 - June 2020',
      description:
        'Focused on advanced software engineering principles, web application architecture, and database management. Completed a capstone project on AI-driven recommendation systems.',
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Figma'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'Django', 'GraphQL', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['Git', 'Docker', 'Kubernetes', 'AWS (EC2, S3, Lambda)', 'CI/CD', 'Nginx', 'Vercel'],
    },
    {
      category: 'Testing & Tools',
      items: ['Jest', 'React Testing Library', 'Webpack', 'Babel', 'Jira', 'Agile Methodologies'],
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
    hover: { scale: 1.05, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)', transition: { duration: 0.2 } },
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-16 text-indigo-800 tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-purple-600">Resume</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content Column (Work Experience & Education) */}
          <div className="md:col-span-2 space-y-12">
            <motion.section
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center border-b-2 border-purple-400 pb-3">
                <Briefcase className="h-7 w-7 mr-3 text-purple-500" /> Work Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    variants={itemVariants}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{exp.title}</h3>
                    <p className="text-purple-600 font-semibold mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center border-b-2 border-purple-400 pb-3">
                <GraduationCap className="h-7 w-7 mr-3 text-purple-500" /> Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    variants={itemVariants}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{edu.degree}</h3>
                    <p className="text-purple-600 font-semibold mb-1">{edu.school}</p>
                    <p className="text-gray-500 text-sm mb-4">{edu.period}</p>
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar Column (Skills) */}
          <div>
            <motion.section
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-3xl font-bold mb-6 text-indigo-700 flex items-center border-b-2 border-purple-400 pb-3">
                <Code className="h-7 w-7 mr-3 text-purple-500" /> Skills
              </h2>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100"
                    variants={itemVariants}
                  >
                    <h3 className="text-lg font-bold mb-4 text-gray-900">{skillGroup.category}</h3>
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      }}
                    >
                      {skillGroup.items.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 transition-colors cursor-pointer"
                          variants={skillTagVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <a
            href="/Dafa_Ahmad_Fahrisi_Resume.pdf" // Update with your actual resume file name
            className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 font-bold text-lg transform hover:scale-105 group"
            download="Dafa_Ahmad_Fahrisi_Resume.pdf" // Suggested downloaded file name
            aria-label="Download Full Resume (PDF)"
          >
            <Download className="h-6 w-6 mr-3 transition-transform group-hover:rotate-6" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;