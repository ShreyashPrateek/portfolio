const ProjectCard = () => {
  const projects = [
    {
      title: "AI Chat Model",
      subtitle: "LangChain, Hugging Face, Streamlit, Python",
      description: [
        "Build a custom ChatGPT-like conversational AI using LangChain, Hugging Face API, and Python, enabling context-aware natural language interactions.",
        "Integrated multiple LLM components for prompt management, response generation, and memory handling, ensuring accurate and coherent conversation flow.",
        "Built and deployed an interactive Streamlit-based web interface for real-time chat functionality, providing a clean and responsive user experience.",
        "Achieved 95% response consistency through prompt-template tuning and chain optimization."
      ],
      liveUrl: "https://shreyashgpt.streamlit.app/",
      githubUrl: "https://github.com/ShreyashPrateek/GPT",
      gradient: "from-purple-500 to-pink-500",
      icon: "🤖",
      tags: ["LangChain", "Hugging Face", "Streamlit", "Python", "AI/ML"]
    },
    {
      title: "Esports Platform",
      subtitle: "React, Node.js, Supabase, MySQL, Tailwind CSS",
      description: [
        "Engineered a full-stack Esports tournament platform with React, Node.js, Supabase, and MySQL, delivering seamless user registration and tournament workflows.",
        "Implemented secure authentication and dynamic tournament management, including JWT-based login, profile handling, real-time updates, filtering, and status tracking.",
        "Designed and deployed a responsive, gaming-focused UI/UX using Tailwind CSS with animations and parallax effects, ensuring mobile-first scalability and smooth user experience.",
        "Improved page load performance by 25% through component optimization and lazy loading."
      ],
      liveUrl: "https://spiritesports.netlify.app/",
      githubUrl: "https://github.com/ShreyashPrateek/spirit-esports",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🎮",
      tags: ["React", "Node.js", "Supabase", "MySQL", "Tailwind CSS"]
    },
    {
      title: "Registration System",
      subtitle: "Java, Servlet, JSP, MySQL",
      description: [
        "Created a secure user registration/login system with encrypted password storage and input validation.",
        "Managed session tracking and dynamic data display via JDBC integration with MySQL.",
        "Implemented MySQL database to store user credentials and ensure data integrity, deployed using Apache Tomcat.",
        "Integrated server-side form validations and exception handling to enhance security and prevent unauthorized access.",
        "Optimized JDBC queries and connection handling, reducing response time and improving overall application performance."
      ],
      liveUrl: null,
      githubUrl: "https://github.com/ShreyashPrateek/SignUpForm",
      gradient: "from-green-500 to-emerald-500",
      icon: "🔐",
      tags: ["Java", "Servlet", "JSP", "MySQL", "Apache Tomcat"]
    }
  ]

  return (
    <div className="space-y-16">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Showcasing my passion for building innovative solutions with modern technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
            style={{
              animationDelay: `${index * 200}ms`
            }}
          >
            {/* Project Header */}
            <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                {project.icon}
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-3">{project.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm font-medium">{project.subtitle}</p>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Description */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-300 text-sm leading-relaxed flex items-start">
                      <span className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-white/20 rounded-full text-xs font-medium text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-purple-500/25 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-center text-sm flex items-center justify-center group/btn`}
                  >
                    <svg className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${project.liveUrl ? 'flex-1' : 'w-full'} bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-center text-sm flex items-center justify-center group/btn`}
                >
                  <svg className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Summary */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Project Portfolio
        </h3>
        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {projects.length}
            </div>
            <p className="text-gray-400 text-sm">Projects Built</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {projects.reduce((total, project) => total + project.tags.length, 0)}
            </div>
            <p className="text-gray-400 text-sm">Technologies Used</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard