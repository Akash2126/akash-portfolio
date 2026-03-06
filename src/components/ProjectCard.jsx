import { useState } from 'react'
import { FiGithub, FiExternalLink, FiPlay, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import DemoModal from './DemoModal'

export default function ProjectCard({ project }) {
  const [showDemo, setShowDemo] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const isCompleted = project.status === 'Completed'
  
  // Map project titles to case study routes
  const getCaseStudyRoute = (title) => {
    const routes = {
      'CareOpt AI': 'careopt-ai',
      'Product Return Probability Predictor': 'product-return-predictor',
      'AI-Driven Healthcare Anomaly Detection': 'healthcare-anomaly-detection',
      'FinRelief AI': 'finrelief-ai',
      'GenMed AI Chatbot': 'genmed-ai-chatbot'
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
          <div className="flex flex-col items-end gap-2">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                isCompleted ? 'status-completed' : 'status-progress'
              }`}
            >
              {isCompleted ? '✓ ' : '⟳ '}
              {project.status}
            </span>
            {project.domain && (
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                {project.domain}
              </span>
            )}
          </div>
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
          
          {project.demoImage ? (
            <button
              onClick={() => setShowImageModal(true)}
              className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <FiPlay size={15} />
              Live Demo
            </button>
          ) : project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <FiPlay size={15} />
              Live Demo
            </a>
          ) : (
            <button
              onClick={() => setShowDemo(true)}
              className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <FiPlay size={15} />
              Live Demo
            </button>
          )}
          
          {project.demoImage ? (
            <button
              onClick={() => setShowImageModal(true)}
              className="flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors ml-auto"
            >
              <FiExternalLink size={15} />
              Case Study
            </button>
          ) : project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors ml-auto"
            >
              <FiExternalLink size={15} />
              Case Study
            </a>
          ) : (
            <Link
              to={`/case-study/${caseStudyKey}`}
              className="flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors ml-auto"
            >
              <FiExternalLink size={15} />
              Case Study
            </Link>
          )}
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={showDemo} 
        onClose={() => setShowDemo(false)} 
        projectTitle={project.title}
        caseStudy={caseStudyKey}
      />

      {/* Image Preview Modal */}
      {showImageModal && project.demoImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Dark overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowImageModal(false)}
          />
          
          {/* Modal content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden animate-fadeIn">
            {/* Close button */}
            <button 
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors shadow-md"
            >
              <FiX size={18} />
            </button>
            
            {/* Chat Interface Preview */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">{project.title} Demo</h3>
              
              <div className="bg-slate-50 rounded-xl p-4 min-h-[280px] flex flex-col">
                {/* Bot message */}
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-sm flex-shrink-0">
                    🤖
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm text-sm text-slate-700 max-w-[85%]">
                    Hello! I'm GenMed AI. How can I help you with your health queries today?
                  </div>
                </div>
                
                {/* User message */}
                <div className="flex gap-3 mb-4 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-sm flex-shrink-0">
                    👤
                  </div>
                  <div className="bg-primary-600 text-white rounded-2xl rounded-tr-md p-3 shadow-sm text-sm max-w-[85%]">
                    What is the treatment for headache?
                  </div>
                </div>
                
                {/* Bot response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-sm flex-shrink-0">
                    🤖
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm text-sm text-slate-700 max-w-[85%] space-y-2">
                    <p><span className="font-semibold">💊 Medicine:</span> Over-the-counter pain relievers like ibuprofen or acetaminophen.</p>
                    <p><span className="font-semibold">⚠ Action:</span> Rest and drink plenty of water.</p>
                    <p><span className="font-semibold">⚠ Warning:</span> If headache persists or symptoms worsen, consult a doctor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
