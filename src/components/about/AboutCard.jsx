const AboutCard = () => {
  const education = [
    {
      degree: "Bachelor in Engineering (B.E.)",
      institution: "Nitte Meenakshi Institute Of Technology, Bengaluru",
      field: "Electronics and Communication Engineering",
      period: "August 2019 - July 2023"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Jesus & Mary Academy",
      field: "Central Board Of Secondary Education(CBSE)",
      period: "2018"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Madonna English School",
      field: "Indian Certificate of Secondary Education(ICSE)",
      period: "2016"
    }
  ]

  const workExperience = {
    company: "Aimyze Software Private Limited",
    role: "Software Apprentice",
    period: "June 2025 - Nov 2025"
  }

  return (
    <div className="space-y-16">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* About Me Content */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
          About Me
        </h3>
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-lg text-justify">
            I am a passionate Software Developer with a strong foundation in problem-solving, analytical thinking, and modern software engineering practices. Over the years, I have built and strengthened my expertise in full-stack development, working with frontend technologies such as HTML, CSS, JavaScript, and React.js, along with backend and programming skills in Java, C++, JDBC, Servlets, JSP, and database management using MySQL.
        I enjoy building clean, scalable, and efficient applications—whether it’s developing responsive user interfaces or designing robust backend systems. My projects and hands-on experience reflect my commitment to writing high-quality code and delivering meaningful solutions.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg text-justify">
            I enjoy building clean, scalable, and efficient applications—whether it's developing responsive user interfaces or designing robust backend systems. My projects and hands-on experience reflect my commitment to writing high-quality code and delivering meaningful solutions.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg text-justify">
            My long-term goal is to grow as a Software Development Engineer (SDE), where I can utilize my technical skills, passion for coding, and creative problem-solving abilities to build impactful, high-performance software products.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></span>
          Education
        </h3>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-gradient-to-b from-purple-500 to-pink-500">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                <p className="text-purple-300 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-400 mb-2">{edu.field}</p>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
          <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"></span>
          Work Experience
        </h3>
        <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h4 className="text-xl font-semibold text-white">{workExperience.role}</h4>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm mt-2 sm:mt-0">
              {workExperience.period}
            </span>
          </div>
          <p className="text-green-300 font-medium text-lg">{workExperience.company}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard