const areas = [
  {
    icon: '🧠',
    title: 'Machine Learning Systems',
    description: 'Building ML models for prediction, anomaly detection, and decision support.',
    tags: ['Scikit-learn', 'XGBoost', 'Random Forest', 'Autoencoders'],
    gradient: 'from-blue-500 to-primary-600',
  },
  {
    icon: '🤖',
    title: 'Generative AI Applications',
    description: 'Working with LLMs, prompt engineering, and RAG-based systems.',
    tags: ['LLMs', 'RAG', 'LangChain', 'GPT'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '⚡',
    title: 'Data Engineering & Pipelines',
    description: 'Real-time data processing using Kafka, APIs, and backend services.',
    tags: ['Apache Kafka', 'FastAPI', 'Data Pipelines', 'PostgreSQL'],
    gradient: 'from-blue-600 to-indigo-500',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Data exploration, SQL analytics, and dashboard insights.',
    tags: ['Pandas', 'SQL', 'Data Visualization', 'Power BI'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: '🏥',
    title: 'AI in Healthcare',
    description: 'AI solutions for healthcare recommendations and anomaly detection.',
    tags: ['Healthcare AI', 'Anomaly Detection', 'RAG', 'Medical Data'],
    gradient: 'from-emerald-500 to-teal-500',
  },
]

export default function AreasOfWork() {
  return (
    <section id="areas" className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="badge mx-auto mb-4">Expertise</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Expertise</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Domains I specialize in, applying cutting-edge ML techniques to real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {areas.map((area, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 shadow-sm rounded-xl p-6 cursor-default hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${area.gradient} rounded-full mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center text-xl shadow-md`}>
                  {area.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base">{area.title}</h3>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-3">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 text-gray-800 border border-gray-200 hover:from-red-500/20 hover:via-green-500/20 hover:to-blue-500/20 transition-all duration-200"
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
