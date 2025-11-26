const Resume = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-white/10">
        {/* Close Button */}
        <div className="sticky top-0 bg-black/20 backdrop-blur-sm border-b border-white/10 p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Resume</h2>
            <a
              href="https://drive.google.com/uc?export=download&id=1sZVNtkgAned20nfmUOZDXmCYD2L73tIR"
              target="_blank"
              download="Shreyash_Prateek_Resume.pdf"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </a>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Resume Content */}
        <div className="p-8 text-gray-300">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">Shreyash Prateek</h1>
            <p className="text-xl text-purple-300 mb-4">Full Stack Developer | Java Backend Developer</p>
            <div className="text-sm text-gray-400 space-y-1">
              <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-2">
                <span>Bangalore, India</span>
                <span className="hidden sm:inline">|</span>
                <span className="break-all">shreyashprateek01@gmail.com</span>
                <span className="hidden sm:inline">|</span>
                <span>+91 9631739960</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-2">
                <span>LinkedIn: linkedin.com/in/shreyash-prateek</span>
                <span className="hidden sm:inline">|</span>
                <span>GitHub: github.com/shreyashprateek</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-purple-500 pb-2 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
              Summary
            </h2>
            <p className="text-gray-300 leading-relaxed text-justify ml-0">
              Passionate Full Stack Developer with experience in building scalable applications, skilled in backend API development, SQL database design, and modern web application deployment.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-purple-500 pb-2 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></span>
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-purple-300 mb-1">Languages:</p>
                <p className="text-gray-300 mb-3 text-sm">Java, SQL, HTML, CSS, JavaScript, PHP, Python</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-purple-300 mb-1">Frameworks/Libraries:</p>
                <p className="text-gray-300 mb-3 text-sm">JSP, Servlets, Spring Boot, Laravel, React.js, Vue.js</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-purple-300 mb-1">Database:</p>
                <p className="text-gray-300 text-sm">MySQL</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-purple-300 mb-1">Tools:</p>
                <p className="text-gray-300 mb-3 text-sm">VS Code, Spring Tool Suite, GitHub, Docker</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-purple-300 mb-1">Cloud and DevOps:</p>
                <p className="text-gray-300 mb-3 text-sm">AWS, CI/CD with Jenkins</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-purple-300 mb-1">GenAI and LLMs:</p>
                <p className="text-gray-300 text-sm">LangChain, Hugging Face, ChatGPT, Claude, Amazon Q, OpenAI API</p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-purple-500 pb-2 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"></span>
              Work Experience
            </h2>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white text-left ml-0">Software Apprentice</h3>
                  <p className="text-green-300">Aimyze Software Private Limited</p>
                </div>
                <span className="text-gray-400 text-sm sm:text-base mt-1 sm:mt-0">June 2025 – November 2025</span>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Enhanced Laravel backend APIs by optimizing SQL queries and integrating caching, lowering response times by 20%.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Built responsive and dynamic UI components using Vue.js and Tailwind CSS, boosting cross-device usability by 30%.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Architected scalable MySQL database schemas with migrations to maintain performance and data consistency.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Implemented secure REST API integrations and documented endpoints for seamless frontend-backend communication.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Participated in Agile sprints, contributing to planning, testing, and full-stack feature deployment.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-purple-500 pb-2 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
              Projects
            </h2>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold mb-1 text-white">Esports Platform</h3>
              <p className="text-blue-300 mb-2 text-sm">React, Node.js, Supabase, MySQL, Tailwind CSS</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Engineered a full-stack Esports tournament platform delivering seamless user registration and tournament workflows.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Implemented secure authentication and dynamic tournament management with JWT-based login and real-time updates.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Designed responsive, gaming-focused UI/UX using Tailwind CSS with animations and parallax effects.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Improved page load performance by 25% through component optimization and lazy loading.</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold mb-1 text-white">AI Chat Model</h3>
              <p className="text-purple-300 mb-2 text-sm">LangChain, Hugging Face, Streamlit, Python</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Built a custom ChatGPT-like conversational AI using LangChain and Hugging Face API.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Integrated multiple LLM components for prompt management and response generation.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Deployed interactive Streamlit-based web interface for real-time chat functionality.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Achieved 95% response consistency through prompt-template tuning and chain optimization.</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold mb-1 text-white">Registration System</h3>
              <p className="text-green-300 mb-2 text-sm">Java, Servlet, JSP, MySQL</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Created secure user registration/login system with encrypted password storage and input validation.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Managed session tracking and dynamic data display via JDBC integration with MySQL.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-justify">Implemented MySQL database to store user credentials and ensure data integrity.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-purple-500 pb-2 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></span>
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="text-lg font-semibold text-white text-left ml-0">Bachelor of Engineering (B.E.)</h3>
                <p className="text-purple-300 text-left ml-0">Nitte Meenakshi Institute of Technology</p>
                <p className="text-gray-400">Electronics and Communication Engineering</p>
              </div>
              <span className="text-gray-400 text-sm sm:text-base mt-1 sm:mt-0">August 2019 – June 2023</span>
            </div>
          </section>

          {/* Professional Training */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-purple-500 pb-2 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-3"></span>
              Professional Training
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-white">Besant Technologies</h3>
                <p className="text-orange-300 text-left ml-0">Mode: Offline</p>
              </div>
              <span className="text-gray-400 text-sm sm:text-base mt-1 sm:mt-0">Oct 2023 – Aug 2024</span>
            </div>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-justify">Completed 10-month intensive training in Core Java, Advanced Java and Spring Framework.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-justify">Developed and deployed Java web applications integrating front-end with back-end using JDBC and MySQL.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-justify">Hands-on experience with servlet-based authentication, session tracking, and CRUD operations.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-justify">Gained exposure to responsive UI development with React.js and JavaScript DOM manipulation.</span>
              </li>
            </ul>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-purple-500 pb-2 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-3"></span>
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-yellow-300 mb-1">Full Stack Java Development (UDEMY)</p>
                <p className="text-gray-400 text-sm">April 2024 – June 2024</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-yellow-300 mb-1">Web Development (Teachnook)</p>
                <p className="text-gray-400 text-sm">Aug 2023 – Sept 2023</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-yellow-300 mb-1">TCS Mastercraft Dataplus (TCS ION)</p>
                <p className="text-gray-400 text-sm">Sept 2022 – Oct 2022</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-semibold text-yellow-300 mb-1">Internet of Things (NPTEL)</p>
                <p className="text-gray-400 text-sm">July 2022 – Oct 2022</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume