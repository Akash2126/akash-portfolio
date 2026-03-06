import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FiUser, FiCode, FiBriefcase, FiAward } from 'react-icons/fi'

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
    <section id="about" className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 items-start max-w-7xl mx-auto">
          {/* Left Column - Heading, Subtitle, Paragraphs and Skills */}
          <div className="text-left max-w-xl">
            {/* About Me Badge - Centered */}
            <div className="w-full text-center">
              <span className="px-4 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-6 inline-block">
                About Me
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-xl">
              <span className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Passionate about building{' '}
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
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
                <span key={tag} className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-600 border border-blue-100">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-5">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="card p-6 flex gap-4 shine-card hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

