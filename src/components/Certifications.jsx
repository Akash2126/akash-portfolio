import { FiExternalLink, FiAward } from 'react-icons/fi'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="badge mx-auto mb-4">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mx-auto text-center">
            Industry certifications that validate my expertise in data, cloud, and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className="card p-6 group shine-card flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
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
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors mt-auto"
                >
                  View Certificate
                  <FiExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Google Skill Badges CTA */}
        <div className="mt-8 text-center" data-aos="fade-up">
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
        </div>
      </div>
    </section>
  )
}
