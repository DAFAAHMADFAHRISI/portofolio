const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js',
    'Python', 'Git', 'Docker', 'AWS', 'MongoDB', 'SQL'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="w-full p-0">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-gray-600 mb-6">
              I am a passionate web developer with a strong foundation in both front-end and back-end technologies.
              My journey in software development began with a curiosity about how things work on the web,
              and it has evolved into a professional career focused on creating meaningful digital experiences.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Education & Experience</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Science</h3>
              <p className="text-gray-600">University Name, 2018-2022</p>
              <p className="text-gray-600 mt-2">
                Focused on software engineering and web development. Graduated with honors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Senior Web Developer</h3>
              <p className="text-gray-600">Company Name, 2022-Present</p>
              <p className="text-gray-600 mt-2">
                Leading development of enterprise web applications using modern technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 