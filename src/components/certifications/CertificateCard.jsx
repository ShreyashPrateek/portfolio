const CertificateCard = () => {
  const certificates = [
    {
      title: "Full Stack Java Development",
      provider: "UDEMY",
      icon: "☕",
      gradient: "from-orange-500 to-red-500",
      category: "Full Stack Development",
      skills: ["Java", "Spring Boot", "React", "MySQL"],
      certificateUrl: "https://drive.google.com/file/d/1-BDjdJsZxY_20KmoLmVNoYmG8tDcxwR1/view"
    },
    {
      title: "Full Stack Web Development",
      provider: "LinkedIn Learning",
      icon: "💼",
      gradient: "from-blue-500 to-cyan-500",
      category: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Node.js"],
      certificateUrl: "https://drive.google.com/file/d/1-CCOqBYAp2iFGuzz_pSgP-jbZ-DiI7LM/view"
    },
    {
      title: "Web Development",
      provider: "Teachnook",
      icon: "🌐",
      gradient: "from-green-500 to-emerald-500",
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      certificateUrl: "https://drive.google.com/file/d/17tm37sajkmLS5x2OX-OebRY40cS29imz/view"
    },
    {
      title: "TCS Mastercraft Dataplus",
      provider: "TCS ION",
      icon: "📊",
      gradient: "from-purple-500 to-pink-500",
      category: "Data Analytics",
      skills: ["Data Analysis", "SQL", "Analytics", "Reporting"],
      certificateUrl: "https://drive.google.com/file/d/1-LAxCGpt8K1yPFuGn071c8lmPqrjuaE-/view"
    },
    {
      title: "Internet of Things",
      provider: "NPTEL",
      icon: "🔗",
      gradient: "from-indigo-500 to-purple-500",
      category: "IoT Technology",
      skills: ["IoT", "Sensors", "Networking", "Embedded Systems"],
      certificateUrl: "https://drive.google.com/file/d/17vBSQ12YucihoSkqG3qg8OT-HUZqt4tP/view"
    }
  ]

  return (
    <div className="space-y-16">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Professional certifications and achievements in various technologies
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={cert.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            {/* Certificate Header */}
            <div className={`bg-gradient-to-r ${cert.gradient} p-6 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12">
                {cert.icon}
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                <p className="text-white/90 text-sm font-medium">{cert.provider}</p>
              </div>
            </div>

            {/* Certificate Content */}
            <div className="p-6">
              {/* Category Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${cert.gradient} bg-opacity-20 border border-white/20 rounded-full text-xs font-medium text-white`}>
                  {cert.category}
                </span>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Key Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Button */}
              <div className="text-center">
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${cert.gradient} hover:shadow-lg hover:shadow-purple-500/25 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm flex items-center justify-center group/btn`}
                >
                  <svg className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Show Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Summary */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Certification Portfolio
        </h3>
        <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {certificates.length}
            </div>
            <p className="text-gray-400 text-sm">Certifications</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {certificates.reduce((total, cert) => total + cert.skills.length, 0)}
            </div>
            <p className="text-gray-400 text-sm">Skills Validated</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {new Set(certificates.map(cert => cert.provider)).size}
            </div>
            <p className="text-gray-400 text-sm">Providers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateCard