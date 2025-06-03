import { Link } from "react-router-dom"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

const Home = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment processing and inventory management.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "/placeholder.svg?height=200&width=400",
      link: "/portfolio/ecommerce",
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "An AI-powered application that generates marketing content based on user prompts.",
      tags: ["React", "Node.js", "OpenAI", "MongoDB"],
      image: "/placeholder.svg?height=200&width=400",
      link: "/portfolio/ai-generator",
    },
    {
      id: 3,
      title: "Health & Fitness Tracker",
      description: "Mobile-first application for tracking workouts, nutrition, and health metrics.",
      tags: ["React Native", "Firebase", "Redux", "Charts"],
      image: "/placeholder.svg?height=200&width=400",
      link: "/portfolio/fitness-tracker",
    },
  ]

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
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 w-full px-0">
        <div className="flex flex-col items-center text-center w-full">
          <div className="relative mb-8">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75"></div>
            <div className="relative">
              <img
                src="/profile-placeholder.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Dafa Ahmad Fahrisi</h1>
          <h2 className="text-2xl font-medium text-gray-600 mb-6">Full Stack Developer</h2>
          <p className="text-xl text-gray-600 mb-8">
            I craft elegant, user-friendly web applications with modern technologies. Focused on creating exceptional
            digital experiences that solve real problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:contact@example.com" className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white w-full px-0">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-sm py-2 px-4 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50 w-full px-0">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12">
            A selection of my recent work across various technologies and industries
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 text-xs py-1 px-2 rounded border border-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center bg-white text-gray-800 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white w-full px-0">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm currently available for freelance work and exciting collaborations. Let's create something amazing
            together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
