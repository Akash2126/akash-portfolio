import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiDownload, FiMapPin, FiChevronDown } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import profileImage from "../assets/images/profile.png"
import smartbridgeLogo from "../assets/logos/smartbridge.png"
import resumeFile from "../assets/resume/akash_resume.pdf"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative pt-20 pb-8 md:pt-24 md:pb-10 lg:pt-28 lg:pb-12 flex items-center bg-white"
    >
      {/* Main Content - Two Column Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-10 items-center">
          
          {/* LEFT COLUMN - Profile Identity */}
          <div
            className={`flex flex-col items-center transition-all duration-700 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Profile Image & Logo Container */}
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <div className="relative">
                {/* Soft shadow glow */}
                <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-2xl transform scale-105" />
                <img
                  src={profileImage}
                  alt="Akash Tiwari"
                  className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-white shadow-xl object-cover"
                  style={{ boxShadow: '0 10px 40px rgba(30, 58, 138, 0.15)' }}
                />
              </div>

              {/* SmartBridge Logo - Centered below profile */}
              <img
                src={smartbridgeLogo}
                alt="SmartBridge"
                className="h-10 md:h-12 mx-auto mt-3 object-contain opacity-95"
              />
            </div>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 text-center mx-auto">
              Akash Tiwari
            </h1>

            {/* Role */}
            <p className="text-lg md:text-xl font-semibold text-blue-600 mt-1">
              AI/ML Engineer Intern
            </p>

            {/* Education + Company */}
            <div className="flex items-center justify-center gap-2 mt-1 text-sm text-gray-600">
              <span>MCA Student | AI/ML Intern at <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-semibold">SmartBridge</span></span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm mt-1">
              <FiMapPin size={16} className="text-gray-400" />
              <span>Noida, India | Open to Remote</span>
            </div>
          </div>

          {/* RIGHT COLUMN - Animated Introduction */}
          <div
            className={`transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Fixed Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center md:text-left max-w-xl">
              Building Scalable AI & Machine Learning Systems
            </h2>

            {/* Professional Subtitle with Typing Animation */}
            <div className="text-lg min-h-[1.5rem] text-center md:text-left">
              <span className="bg-gradient-to-r from-red-400 via-green-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                <TypeAnimation
                  sequence={[
                    'Specializing in Generative AI',
                    1500,
                    'Building Scalable Data Pipelines',
                    1500,
                    'Developing AI-powered Applications',
                    1500,
                    'Working with LLM Systems',
                    1500,
                  ]}
                  wrapper="span"
                  speed={60}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100">Python</span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100">Machine Learning</span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100">FastAPI</span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100">Kafka</span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100">SQL</span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100">LLMs</span>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100">Generative AI</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://github.com/Akash2126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/akash2126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 hover:text-blue-600"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={resumeFile}
                download
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium shadow-md transition-all duration-200"
              >
                <FiDownload size={16} className="inline mr-2" />
                Download Resume
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 flex flex-col items-center text-gray-400 text-sm">
              <button
                onClick={scrollToAbout}
                className="flex flex-col items-center gap-1 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                <span className="opacity-70">Explore More</span>
                <FiChevronDown className="animate-bounce" size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
