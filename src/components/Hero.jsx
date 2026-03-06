import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiDownload, FiMapPin, FiChevronDown } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import profileImage from "../assets/images/profile.png"
import smartbridgeLogo from "../assets/logos/smartbridge.png"
import resumeFile from "../assets/resume/akash_resume.pdf"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

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
    <motion.section
      id="hero"
      className="py-16 md:py-20 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main Content - Two Column Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-10 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          
          {/* LEFT COLUMN - Profile Identity */}
          <motion.div
            className="flex flex-col items-center"
            variants={fadeInUp}
          >
            {/* Profile Image & Logo Container */}
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <div className="relative">
                {/* Soft shadow glow */}
                <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-2xl transform scale-105" />
                <img
                  src={profileImage}
                  alt="Akash Tiwari - AI ML Engineer Intern"
                  width={160}
                  height={160}
                  className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-white shadow-xl object-cover"
                  style={{ boxShadow: '0 10px 40px rgba(30, 58, 138, 0.15)' }}
                />
              </div>

              {/* SmartBridge Logo - Centered below profile */}
              <img
                src={smartbridgeLogo}
                alt="SmartBridge"
                className="mt-3 mx-auto h-10 md:h-12 object-contain"
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
              <span>MCA | AI/ML Intern at <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-semibold">SmartBridge</span></span>
            </div>

            {/* Location */}        
            <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm mt-1">
              <FiMapPin size={16} className="text-gray-400" />
              <span>Noida, India | Open to Remote</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Animated Introduction */}
          <motion.div
            className="mt-8 md:mt-0"
            variants={fadeInUp}
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
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200">Python</span>
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200">Machine Learning</span>
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200">FastAPI</span>
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200">Kafka</span>
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200">SQL</span>
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200">LLMs</span>
              <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200">Generative AI</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://github.com/Akash2126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-blue-500 text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
              >
                <FiGithub className="text-black" size={18} />
              </a>
              <a
                href="https://linkedin.com/in/akash2126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 hover:scale-105 transition-all duration-200"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={resumeFile}
                download
                className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 flex items-center gap-2"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-6 flex flex-col items-center">
              <button
                onClick={scrollToAbout}
                className="text-blue-600 flex flex-col items-center gap-1 hover:gap-2 transition-all duration-300 cursor-pointer"
              >   
                <span className="text-sm font-medium">Explore More</span>
                <FiChevronDown className="animate-bounce" size={20} />  
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  )
}
