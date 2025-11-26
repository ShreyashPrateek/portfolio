const SkillCard = () => {
  const skillCategories = [
    {
      title: "Languages",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "SQL", icon: "🗃️" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "PHP", icon: "🐘" },
        { name: "Python", icon: "🐍" }
      ]
    },
    {
      title: "Frameworks/Libraries",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "JSP", icon: "📄" },
        { name: "Servlets", icon: "⚙️" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "Laravel", icon: "🔥" },
        { name: "React.js", icon: "⚛️" },
        { name: "Vue.js", icon: "💚" }
      ]
    },
    {
      title: "GenAI and LLMs",
      gradient: "from-pink-500 to-rose-500",
      skills: [
        { name: "LangChain", icon: "🔗" },
        { name: "Hugging Face", icon: "🤗" },
        { name: "ChatGPT", icon: "🤖" },
        { name: "Claude", icon: "🧠" },
        { name: "Amazon Q", icon: "❓" },
        { name: "OpenAI API", icon: "🚀" }
      ]
    },
    {
      title: "Cloud and DevOps",
      gradient: "from-yellow-500 to-orange-500",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "CI/CD with Jenkins", icon: "🔄" }
      ]
    },
    {
      title: "Tools",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "VS Code", icon: "💻" },
        { name: "Spring Tool Suite", icon: "🛠️" },
        { name: "GitHub", icon: "🐙" },
        { name: "Docker", icon: "🐳" }
      ]
    },
    {
      title: "Concepts",
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "OOP", icon: "🏗️" },
        { name: "DSA", icon: "📊" },
        { name: "Problem Solving", icon: "🧩" },
        { name: "Debugging", icon: "🔍" }
      ]
    },
    {
      title: "Database",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "MySQL", icon: "🐬" }
      ]
    }
  ]

  return (
    <div className="space-y-16">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            style={{
              animationDelay: `${categoryIndex * 100}ms`
            }}
          >
            {/* Category Header */}
            <div className="flex items-center mb-6">
              <div className={`w-1 h-8 bg-gradient-to-b ${category.gradient} rounded-full mr-4`}></div>
              <h3 className={`text-xl font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/skill cursor-pointer"
                  style={{
                    animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2 transform group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Stats */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Skills</span>
                <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-semibold`}>
                  {category.skills.length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Total Skills Mastered
        </h3>
        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
            </div>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {skillCategories.length}
            </div>
            <p className="text-gray-400 text-sm">Categories</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard