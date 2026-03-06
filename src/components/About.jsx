import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiUser, FiCode, FiBriefcase, FiAward } from 'react-icons/fi'

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

const highlights = [
  {
    icon: <FiCode size={20} />,
    title: 'Python-first Development',
    desc: 'Expert in Python-based ML workflows and backend APIs.',
  },
  {
    icon: <FiBriefcase size={20} />,
    title: 'Real-world Projects',
    desc: 'Built AI systems for healthcare analytics and financial platforms.',
  },
  {
    icon: <FiAward size={20} />,
    title: 'Cloud & Data Certified',
    desc: 'Google Cloud and AWS Data Engineering certifications.',
  },
  {
    icon: <FiUser size={20} />,
    title: 'Current Status',
    desc: 'Machine Learning Intern at SmartBridge and open to ML and AI Engineering roles.',
  },
]

export default function About() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.section 
      id="about" 
      className="mt-12 md:mt-16 py-10 md:py-14 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Two Column Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-6 items-start max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Left Column - Heading, Subtitle, Paragraphs and Skills */}
          <motion.div 
            className="text-left max-w-xl"
            variants={fadeInUp}
          >
            {/* About Me Badge - Centered */}
            <div className="w-full text-center">
              <span className="px-4 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-blue-600 border border-gray-200 mb-6 inline-block font-medium">
                About Me
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-xl">
              <span className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Passionate about building{' '}
                <br />
                <span className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      'AI-driven systems',
                      2000,
                      'intelligent ML platforms',
                      2000,
                      'data-powered applications',
                      2000,
                    ]}
                    wrapper="span"
                    speed={70}
                    repeat={Infinity}
                    cursor={true}
                  />
                </span>
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-4 leading-relaxed max-w-xl">
              I am a Machine Learning Engineer Intern with hands-on experience in building AI-driven systems using Python, machine learning frameworks, and modern backend technologies.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4 max-w-xl">
              At <strong>SmartBridge</strong>, I work on scalable ML applications and AI-powered learning platforms. My focus is on bridging the gap between data, machine learning models, and real-world applications.
            </p>
          
            <p className="text-gray-700 leading-relaxed mt-4 max-w-xl">
              I am particularly interested in:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 max-w-xl space-y-1">
              <li>Generative AI</li>
              <li>Real-time ML pipelines</li>
              <li>Intelligent decision support systems</li>
              <li>AI education and knowledge sharing</li>
            </ul>
          
            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['Python', 'Machine Learning', 'FastAPI', 'Kafka', 'SQL', 'LLMs', 'Generative AI'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div 
            className="space-y-5"
            variants={fadeInUp}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="card p-6 flex gap-4 shine-card hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

