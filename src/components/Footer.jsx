import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-slate-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-blue-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">AT</span>
              </div>
              <span className="font-bold text-white">Akash Tiwari</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Machine Learning Intern & AIML Engineer building intelligent systems
              with Python, ML, and real-time data pipelines.
            </p>
            <div className="flex gap-3 mt-5">
              {[
{ icon: <FiGithub className="text-black" />, href: 'https://github.com/Akash2126', title: 'GitHub' },
                { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/akash2126', title: 'LinkedIn' },
                { icon: <FiMail />, href: 'mailto:kumarakash02401@gmail.com', title: 'Email' },
              ].map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  target={s.title !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  title={s.title}
                  className="w-9 h-9 bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white rounded-xl flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-500 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-white font-semibold mb-4">Specializations</h4>
            <div className="flex flex-wrap gap-3 mt-3">
              {['Python', 'Machine Learning', 'NLP', 'LLMs', 'Gen AI', 'FastAPI', 'SQL', 'Kafka'].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-sm font-medium rounded-full text-white border border-white/30 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-600">
          <p>
            © 2026 Akash Tiwari — Machine Learning Intern Portfolio
          </p>
          <p className="flex items-center gap-1.5">
            Built with <FiHeart size={12} className="text-red-400" /> using React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
