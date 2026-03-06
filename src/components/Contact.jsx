import { FiMail, FiGithub, FiLinkedin, FiArrowRight, FiMapPin } from 'react-icons/fi'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
}

const contacts = [
  {
    icon: <FiMail size={24} />,
    title: 'Email',
    value: 'kumarakash02401@gmail.com',
    href: 'mailto:kumarakash02401@gmail.com',
    label: 'Send Email',
    gradient: 'from-blue-500 to-primary-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  {
    icon: <FiGithub size={24} />,
    title: 'GitHub',
    value: 'github.com/Akash2126',
    href: 'https://github.com/Akash2126',
    label: 'View Profile',
    gradient: 'from-slate-700 to-slate-900',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-700',
  },
  {
    icon: <FiLinkedin size={24} />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/akash2126',
    href: 'https://www.linkedin.com/in/akash2126',
    label: 'Connect',
    gradient: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-sky-50',
    textColor: 'text-sky-700',
  },
]

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="section-padding bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="badge mx-auto mb-4">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle mx-auto text-center">
            I'm actively looking for ML and AI engineering roles. Reach out and let's
            build something impactful together.
          </p>
          <div className="flex items-center justify-center gap-1.5 text-sm text-slate-500 mt-4">
            <FiMapPin size={14} className="text-primary-500" />
            <span>Noida, Uttar Pradesh, India · Open to Remote</span>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {contacts.map((c, i) => (
            <motion.div
              key={i}
              className="card p-6 text-center group shine-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${c.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {c.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{c.title}</h3>
              <p className="text-xs text-slate-500 mb-5 break-all">{c.value}</p>
              <a
                href={c.href}
                target={c.title !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 inline-flex items-center gap-1.5 mx-auto"
              >
                {c.label}
                <FiArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          className="mt-10 bg-gradient-to-r from-primary-600 to-blue-500 rounded-2xl p-8 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 grid-dot-bg opacity-10" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Ready to collaborate?</h3>
            <p className="text-blue-100 mb-4 text-sm max-w-md mx-auto">
              Whether it's a full-time ML role, internship, or a project — I'm all ears.
            </p>
            <a
              href="mailto:kumarakash02401@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <FiMail size={16} />
              Drop me an email
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
