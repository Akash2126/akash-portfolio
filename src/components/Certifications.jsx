import { useState } from 'react'
import { FiExternalLink, FiAward, FiX } from 'react-icons/fi'
import { certifications } from '../data/certifications'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)
  return (
    <motion.section 
      id="certifications" 
      className="section-padding bg-white"
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
          <span className="badge mx-auto mb-4">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mx-auto text-center">
            Industry certifications that validate my expertise in data, cloud, and AI.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="card p-6 group shine-card flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {cert.verified && (
                <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                  Verified ✓
                </span>
              )}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-full inline-block">
                    {cert.issuer}
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-primary-600 transition-colors duration-200">
                {cert.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-grow">
                {cert.description}
              </p>

              {cert.link !== '#' && (
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 inline-flex items-center justify-center gap-2 mt-auto cursor-pointer"
                >
                  View Certificate
                  <FiExternalLink size={14} />
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Google Skill Badges CTA */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.skills.google/public_profiles/37d6579a-dd72-4138-a7b3-ff592ad971e3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiAward size={16} />
            View All Google Skill Badges
            <FiExternalLink size={14} />
          </a>
        </motion.div>

        {/* Certificate Preview Modal */}
        {selectedCert && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl cursor-pointer"
                onClick={() => setSelectedCert(null)}
              >
                <FiX />
              </button>
              <h3 className="text-xl font-bold text-slate-900 mb-4 pr-8">
                {selectedCert.title}
              </h3>
              <iframe
                src={selectedCert.link}
                className="w-full h-[500px] rounded-lg border border-gray-200"
                title="Certificate Preview"
              />
              <div className="mt-4 flex justify-center">
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 inline-flex items-center justify-center gap-2"
                >
                  Open Full Certificate
                  <FiExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  )
}
