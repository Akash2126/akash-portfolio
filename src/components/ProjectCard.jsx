import { useState } from 'react'
import { FiGithub, FiExternalLink, FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import DemoModal from './DemoModal'

export default function ProjectCard({ project }) {
  const [showDemo, setShowDemo] = useState(false)
  const isCompleted = project.status === 'Completed'
  
  // Map project titles to case study routes
  const getCaseStudyRoute = (title) => {
    const routes = {
      'CareOpt AI': 'careopt-ai',
      'Product Return Probability Predictor': 'product-return-predictor',
      'AI-Driven Healthcare Anomaly Detection': 'healthcare-anomaly-detection',
      'FinRelief AI': 'finrelief-ai'
    }
    return routes[title] || title.toLowerCase().replace(/\s+/g, '-')
  }

  // Metrics for each project
  const getMetrics = (title) => {
    const metricsData = {
      'Product Return Probability Predictor': {
        accuracy: '87%',
        dataset: '50k rows',
        model: 'Random Forest'
      },
      'AI-Driven Healthcare Anomaly Detection': {
        model: 'Autoencoder + Isolation Forest',
        pipeline: 'Kafka Streaming',
        database: 'PostgreSQL'
      }
    }
    return metricsData[title] || null
  }

  const metrics = getMetrics(project.title)
  const caseStudyKey = getCaseStudyRoute(project.title)

  return (
    <>
      <div className="card p-6 flex flex-col h-full shine-card group hover:-translate-y-2 transition-all duration-300 shadow-lg">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
            {project.icon}
          </div>
          <span
            className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
              isCompleted ? 'status-completed' : 'status-progress'
            }`}
          >
            {isCompleted ? '✓ ' : '⟳ '}
            {project.status}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Metrics Section */}
        {metrics && (
          <div className="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {metrics.accuracy && (
                <div>
                  <span className="text-slate-500">Accuracy:</span>
                  <span className="font-semibold text-primary-600 ml-1">{metrics.accuracy}</span>
                </div>
              )}
              {metrics.dataset && (
                <div>
                  <span className="text-slate-500">Dataset:</span>
                  <span className="font-semibold text-slate-700 ml-1">{metrics.dataset}</span>
                </div>
              )}
              {metrics.model && (
                <div>
                  <span className="text-slate-500">Model:</span>
                  <span className="font-semibold text-slate-700 ml-1">{metrics.model}</span>
                </div>
              )}
              {metrics.pipeline && (
                <div>
                  <span className="text-slate-500">Pipeline:</span>
                  <span className="font-semibold text-slate-700 ml-1">{metrics.pipeline}</span>
                </div>
              )}
              {metrics.database && (
                <div>
                  <span className="text-slate-500">Database:</span>
                  <span className="font-semibold text-slate-700 ml-1">{metrics.database}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-primary-50 text-primary-700 border border-primary-100 px-2.5 py-1 rounded-lg font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100 flex-wrap">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors"
            >
              <FiGithub size={15} />
              View Code
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm text-slate-400 cursor-not-allowed">
              <FiGithub size={15} />
              Coming Soon
            </span>
          )}
          
          <button
            onClick={() => setShowDemo(true)}
            className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <FiPlay size={15} />
            Live Demo
          </button>
          
          <Link
            to={`/case-study/${caseStudyKey}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors ml-auto"
          >
            <FiExternalLink size={15} />
            Case Study
          </Link>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={showDemo} 
        onClose={() => setShowDemo(false)} 
        projectTitle={project.title}
        caseStudy={caseStudyKey}
      />
    </>
  )
}
