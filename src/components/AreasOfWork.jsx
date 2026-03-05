const areas = [
  {
    icon: '🧠',
    title: 'Machine Learning',
    description:
      'Designing and deploying end-to-end ML pipelines using Scikit-learn, feature engineering, and ensemble methods.',
    tags: ['Scikit-learn', 'XGBoost', 'Regression', 'Classification'],
    gradient: 'from-blue-500 to-primary-600',
  },
  {
    icon: '🏥',
    title: 'Healthcare AI',
    description:
      'Building AI-driven healthcare decision support systems for hospital recommendations and anomaly detection.',
    tags: ['Anomaly Detection', 'Autoencoders', 'Decision Support'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: '📊',
    title: 'Predictive Analytics',
    description:
      'Developing predictive models for e-commerce return prediction, demand forecasting, and risk analysis.',
    tags: ['Forecasting', 'Risk Analysis', 'Pandas', 'NumPy'],
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    icon: '⚡',
    title: 'Real-time Data Systems',
    description:
      'Building streaming data pipelines with Apache Kafka for real-time patient monitoring and alerting.',
    tags: ['Apache Kafka', 'Streaming', 'Flask', 'PostgreSQL'],
    gradient: 'from-blue-600 to-indigo-500',
  },
  {
    icon: '💡',
    title: 'Decision Support Platforms',
    description:
      'Creating full-stack AI platforms that provide intelligent recommendations for healthcare and finance.',
    tags: ['FastAPI', 'React', 'Leaflet', 'AI APIs'],
    gradient: 'from-primary-500 to-cyan-500',
  },
]

export default function AreasOfWork() {
  return (
    <section id="areas" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="badge mx-auto mb-4">Expertise</span>
          <h2 className="section-title">Areas of Work</h2>
          <p className="section-subtitle mx-auto text-center">
            Domains I specialize in, applying cutting-edge ML techniques to real problems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div
              key={i}
              className="group card p-6 cursor-default"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${area.gradient} rounded-full mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
                  {area.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight">{area.title}</h3>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-50 text-slate-600 px-3 py-1 rounded-full border border-slate-200 font-medium group-hover:bg-primary-50 group-hover:text-primary-700 group-hover:border-primary-100 transition-colors duration-300"
                  >
                    {tag}
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
