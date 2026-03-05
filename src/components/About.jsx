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
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div data-aos="fade-right">
            <span className="badge mb-4">About Me</span>
            <h2 className="section-title">
              Passionate about building{' '}
              <span className="gradient-text">AI-driven systems</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              I am a Machine Learning Intern with hands-on experience in Python-based 
              data processing, machine learning workflows, and building real-world AI systems.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              At <strong>SmartBridge</strong>, I work on building scalable ML-powered applications 
              and intelligent data platforms. From real-time data pipelines with Kafka to 
              AI-powered decision support systems with FastAPI — I focus on bridging the gap 
              between raw data and impactful applications.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Python', 'Machine Learning', 'Data Analytics', 'FastAPI', 'Kafka', 'SQL', 'LLMs'].map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-5" data-aos="fade-left" data-aos-delay="100">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="card p-6 flex gap-4 shine-card hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
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
