import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    number: '',
    email: '',
    subject: '',
    otherSubject: '',
    description: ''
  })

  const [showOtherField, setShowOtherField] = useState(false)

  const subjectOptions = [
    'Project Inquiry',
    'Hiring / Job Opportunity',
    'Freelance Work',
    'Web Development Request',
    'Java / Backend Development',
    'Collaboration Request',
    'Feedback / Suggestions',
    'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (name === 'subject') {
      setShowOtherField(value === 'Other')
      if (value !== 'Other') {
        setFormData(prev => ({
          ...prev,
          otherSubject: ''
        }))
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="space-y-16">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Let's discuss your next project or opportunity. I'd love to hear from you!
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* Number and Email - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Number */}
            <div>
              <label htmlFor="number" className="block text-sm font-semibold text-white mb-2">
                Number *
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Subject Dropdown */}
          <div className="relative">
            <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="" className="bg-gray-800 text-gray-300">Select a subject</option>
              {subjectOptions.map((option, index) => (
                <option key={index} value={option} className="bg-gray-800 text-white">
                  {option}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Other Subject Field - Conditional */}
          {showOtherField && (
            <div className="animate-fadeIn">
              <label htmlFor="otherSubject" className="block text-sm font-semibold text-white mb-2">
                Please specify *
              </label>
              <input
                type="text"
                id="otherSubject"
                name="otherSubject"
                value={formData.otherSubject}
                onChange={handleInputChange}
                required={showOtherField}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Please specify your subject"
              />
            </div>
          )}

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-white mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Describe your project, requirements, or message in detail..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center mx-auto group"
            >
              <svg className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
          <div className="text-3xl mb-4">📧</div>
          <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
          <p className="text-gray-400">shreyashprateek01@gmail.com</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
          <div className="text-3xl mb-4">📱</div>
          <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
          <p className="text-gray-400">+91 9631739960</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
          <div className="text-3xl mb-4">📍</div>
          <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
          <p className="text-gray-400">Bengaluru, India</p>
        </div>
      </div>
    </div>
  )
}

export default ContactForm