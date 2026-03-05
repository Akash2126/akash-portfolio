import { FiArrowRight } from 'react-icons/fi'

const architectureComponents = [
  {
    id: 1,
    title: 'React Frontend',
    description: 'User interface that collects input and displays predictions.',
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 2,
    title: 'FastAPI Backend',
    description: 'API layer that processes requests and communicates with ML models.',
    icon: '⚡',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Machine Learning Model',
    description: 'Handles prediction logic and data processing.',
    icon: '🧠',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 4,
    title: 'Kafka Streaming',
    description: 'Real-time event pipeline for streaming model results and system data.',
    icon: '📡',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 5,
    title: 'PostgreSQL Database',
    description: 'Stores predictions, logs, and analytics data.',
    icon: '🗄️',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    description: 'Visualizes insights and monitoring metrics.',
    icon: '📊',
    color: 'from-pink-500 to-rose-500'
  }
]

export default function AISystemArchitecture() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="badge mx-auto mb-4">Architecture</span>
          <h2 className="section-title">AI System Architecture</h2>
          <p className="section-subtitle mx-auto text-center">
            How my machine learning systems process data and deliver predictions.
          </p>
        </div>

        {/* Desktop: Horizontal Pipeline */}
        <div className="hidden lg:flex items-center justify-center gap-2" data-aos="fade-up">
          {architectureComponents.map((component, index) => (
            <div key={component.id} className="flex items-center">
              {/* Component Card */}
              <div 
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary-600/10 hover:border-primary-300 hover:scale-105 transition-all duration-300 min-w-[180px] text-center"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${component.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  {component.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {component.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {component.description}
                </p>
              </div>

              {/* Arrow (except for last item) */}
              {index < architectureComponents.length - 1 && (
                <div className="mx-2">
                  <FiArrowRight className="text-primary-400 text-2xl" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-4 max-w-md mx-auto">
          {architectureComponents.map((component, index) => (
            <div key={component.id} data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Component Card */}
              <div 
                className="group bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-primary-600/10 hover:border-primary-300 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {component.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {component.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow (except for last item) */}
              {index < architectureComponents.length - 1 && (
                <div className="flex justify-center my-1">
                  <FiArrowRight className="text-primary-400 text-xl rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow Description */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
          <p className="text-slate-600 max-w-2xl mx-auto">
            <span className="font-semibold text-primary-600">Data Flow:</span> User input → React Frontend → FastAPI → ML Model → Kafka Streaming → PostgreSQL → Analytics Dashboard
          </p>
        </div>
      </div>
    </section>
  )
}
