const TrainingCard = () => {
  const training = {
    institution: "Besant Technologies",
    mode: "Offline",
    period: "Oct 2023 – Aug 2024",
    duration: "10 months",
    type: "Intensive Training",
    focus: "Java Full Stack Developer",
    achievements: [
      "Completed a 10-month intensive training in Core Java, Advanced Java and Spring Framework through hands-on, project-based learning.",
      "Developed and deployed Java web applications integrating front-end (HTML, CSS, JavaScript) with back-end using JDBC and MySQL.",
      "Hands-on experience with servlet-based authentication, session tracking, and CRUD operations.",
      "Gained exposure to responsive UI development with React.js and JavaScript DOM manipulation."
    ],
    technologies: [
      "Core Java", "Advanced Java", "Spring Framework", "HTML", "CSS", 
      "JavaScript", "JDBC", "MySQL", "Servlets", "React.js", "DOM Manipulation"
    ]
  }

  return (
    <div className="space-y-16">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Training
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Professional development and hands-on learning experiences
        </p>
      </div>

      {/* Training Card */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 group">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-8xl opacity-10 transform rotate-12">
            🎓
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{training.institution}</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                    📍 {training.mode}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                    📅 {training.period}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                    ⏱️ {training.duration}
                  </span>
                </div>
              </div>
              <div className="text-6xl">🎓</div>
            </div>
            <p className="text-white/90 text-lg font-medium">{training.focus}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Training Type Badge */}
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-6 py-3 rounded-full text-blue-300 font-semibold text-lg">
              🏆 {training.type}
            </span>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
              Key Achievements
            </h4>
            <ul className="space-y-4">
              {training.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 leading-relaxed flex items-start group/item">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></span>
                  <span className="group-hover/item:text-white transition-colors duration-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Learned */}
          <div className="mb-8">
            <h4 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"></span>
              Technologies Learned
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {training.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/tech cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2 transform group-hover/tech:scale-110 transition-transform duration-300">
                      💻
                    </div>
                    <p className="text-gray-300 text-sm font-medium group-hover/tech:text-white transition-colors duration-300">
                      {tech}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials Button */}
          <div className="text-center">
            <a
              href="https://drive.google.com/file/d/183LoKYtTrf7Aqh7AjGCzkjAUS_4N_7d5/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center mx-auto group/btn inline-flex"
            >
              <svg className="w-5 h-5 mr-3 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Show Credentials
            </a>
          </div>
        </div>
      </div>

      {/* Training Summary */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Training Summary
        </h3>
        <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {training.duration}
            </div>
            <p className="text-gray-400 text-sm">Duration</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {training.technologies.length}
            </div>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {training.achievements.length}
            </div>
            <p className="text-gray-400 text-sm">Key Achievements</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingCard