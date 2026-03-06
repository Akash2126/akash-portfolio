import { FiExternalLink } from 'react-icons/fi'

export default function CurrentlyBuilding() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="badge mx-auto mb-4 bg-amber-50 text-amber-700 border-amber-200">
            🚧 Currently Building
          </span>
          <h2 className="section-title">Work in Progress</h2>
          <p className="section-subtitle mx-auto text-center">
            Exciting projects currently under development.
          </p>
        </div>

        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="card p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-lg">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    💰
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">FinRelief AI</h3>
                    <p className="text-sm text-slate-500">Financial Decision Support Platform</p>
                  </div>
                </div>
                <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full border border-orange-200">
                  In Development
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6">
                AI-powered financial decision support platform for loan optimization and financial analytics. 
                Uses intelligent algorithms to provide personalized recommendations for loan management, 
                budget planning, and financial goal tracking.
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mt-3 mb-6">
                {['Python', 'FastAPI', 'React', 'Machine Learning', 'PostgreSQL', 'NLP'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status indicator */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span>Expected completion: Q2 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
