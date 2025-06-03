const Resume = () => {
  const experiences = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: [
        'Led development of enterprise web applications using React and Node.js',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines and improved deployment processes'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: [
        'Developed responsive websites for various clients',
        'Collaborated with designers to implement UI/UX improvements',
        'Optimized website performance and SEO'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University Name',
      period: '2016 - 2020',
      description: 'Focused on software engineering and web development'
    }
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack']
    }
  ];

  return (
    <div className="w-screen min-h-screenpy-12">
      <div className="w-full p-0">
        <h1 className="text-4xl font-bold text-center mb-12">Resume</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 w-full">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-gray-600 mb-2">{exp.company}</p>
                    <p className="text-gray-500 mb-4">{exp.period}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Education</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 mb-2">{edu.school}</p>
                    <p className="text-gray-500 mb-4">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/resume.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            download
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume; 