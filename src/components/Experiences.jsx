import { experiences } from '../data/experiences.jsx'
import { FiBriefcase } from 'react-icons/fi'
import smartbridgeLogo from "../assets/logos/smartbridge.png"
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Experiences() {
  return (
    <motion.section 
      id="experience" 
      className="section-padding bg-slate-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="badge mx-auto mb-4">Career</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto text-center">
            Professional experience and internships that shaped my technical journey.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                {exp.logo ? (
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-xl">
                    <img src={smartbridgeLogo} alt="SmartBridge Logo" className="h-10 w-auto object-contain" />
                  </div>
                ) : (
                  <div className={`w-14 h-14 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                  </div>
                )}
                <div>
                  <div className="text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-full inline-block">
                    {exp.organization}
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-primary-600 transition-colors duration-200">
                {exp.title}
              </h3>

              <p className="text-xs text-blue-600 font-medium mb-1">
                {exp.location && <span>{exp.location} • </span>}
                {exp.duration}
              </p>

              <div className="text-sm text-slate-500 leading-relaxed mb-4">
                {exp.description}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

