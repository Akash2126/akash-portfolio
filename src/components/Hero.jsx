import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiDownload, FiMapPin } from 'react-icons/fi'
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

  return (
    <section
      id="hero"
      className="relative py-14 md:py-20 lg:py-24 flex items-center bg-white"
    >
      {/* Main Content - Two Column Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN - Profile Identity */}
          <div
            className={`flex flex-col items-center transition-all duration-700 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Profile Image & Logo Container */}
            <div className="flex flex-col items-center mb-6">
              {/* Profile Image */}
              <div className="relative">
                {/* Soft shadow glow */}
                <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-2xl transform scale-105" />
                <img
                  src={profileImage}
                  alt="Akash Tiwari"
                  className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-[200px] lg:h-[200px] rounded-full border-4 border-white shadow-xl object-cover"
                  style={{ boxShadow: '0 10px 40px rgba(30, 58, 138, 0.15)' }}
                />
              </div>

              {/* SmartBridge Logo */}
              <img
                src={smartbridgeLogo}
                alt="SmartBridge"
                className="max-w-[100px] sm:max-w-[110px] md:max-w-[120px] opacity-90 object-contain mt-3"
              />
            </div>

            {/* Name */}
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2 text-center">
              Akash Tiwari
            </h1>

            {/* Title */}
            <p className="text-blue-600 font-semibold text-base sm:text-lg mb-2">
              Machine Learning Engineer
            </p>

            {/* Education & Internship */}
            <p className="text-gray-500 text-xs sm:text-sm mb-2 md:mb-3 text-center">
              MCA | Machine Learning Intern at <span className="text-blue-600 font-medium">SmartBridge</span>
            </p>

            {/* Location */}
            <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
              <FiMapPin size={12} className="sm:size-14" />
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Building Intelligent AI Systems
            </h2>

            {/* Typing Animation */}
            <div className="text-blue-600 font-semibold text-lg mb-6 min-h-[2rem]">
              <TypeAnimation
                sequence={[
                  'Scalable Machine Learning Solutions',
                  2000,
                  'AI Powered Applications',
                  2000,
                  'Real-time Data Platforms',
                  2000,
                  'Data-driven Decision Systems',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">Python</span>
              <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">Machine Learning</span>
              <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">FastAPI</span>
              <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">Kafka</span>
              <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">SQL</span>
              <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">LLMs</span>
              <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">Generative AI</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Akash2126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 shadow-sm"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/akash2126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 shadow-sm"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={resumeFile}
                download
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FiDownload size={14} />
                Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
