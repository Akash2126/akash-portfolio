import { experiences } from '../data/experiences.jsx'
import { FiBriefcase } from 'react-icons/fi'
import smartbridgeLogo from "../assets/logos/smartbridge.png"

export default function Experiences() {
  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="badge mx-auto mb-4">Career</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto text-center">
            Professional experience and internships that shaped my technical journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 80}
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

              <p className="text-xs text-slate-400 font-medium mb-1">
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
                    className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

