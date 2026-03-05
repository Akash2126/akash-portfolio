import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Project data for case studies
const caseStudyData = {
  'careopt-ai': {
    title: 'CareOpt AI',
    subtitle: 'Healthcare Decision Support Platform',
    problem: 'Patients often struggle to find affordable healthcare options that match their treatment needs, budget, and location. Healthcare costs vary significantly across hospitals, and there is no unified platform to compare options effectively.',
    architecture: 'The platform uses a microservices architecture with FastAPI backend, React frontend, and PostgreSQL database. Leaflet.js provides interactive maps for hospital location visualization. The ML pipeline processes hospital data to generate cost optimization recommendations.',
    techStack: ['FastAPI', 'PostgreSQL', 'React', 'Tailwind CSS', 'Leaflet', 'Python', 'Scikit-learn'],
    results: [
      'Reduced patient healthcare search time by 60%',
      'Covers 500+ hospitals across major Indian cities',
      'AI-powered cost optimization saves patients an average of 30% on treatments',
      'Interactive map with real-time hospital filtering'
    ],
    metrics: {
      accuracy: 'N/A',
      dataset: '500+ hospitals',
      model: 'Rule-based + ML Ranking'
    },
    github: 'https://github.com/Akash2126/careopt-ai',
    demo: null
  },
  'product-return-predictor': {
    title: 'Product Return Predictor',
    subtitle: 'E-commerce Return Probability Model',
    problem: 'E-commerce companies face significant losses due to product returns. Understanding which products are likely to be returned helps optimize inventory and logistics decisions.',
    architecture: 'Built with Python using Pandas and NumPy for data processing. Scikit-learn powers the ensemble ML models. The model analyzes product features, customer behavior, and order history to predict return probability.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 'XGBoost'],
    results: [
      '87% accuracy in predicting product returns',
      'Reduced return-related costs by 25%',
      'Model trained on 50k+ transaction records',
      'Real-time inference API for integration'
    ],
    metrics: {
      accuracy: '87%',
      dataset: '50k rows',
      model: 'Random Forest + XGBoost Ensemble'
    },
    github: 'https://github.com/Akash2126/product-return-probability-predictor',
    demo: null
  },
  'healthcare-anomaly-detection': {
    title: 'Healthcare Anomaly Detection',
    subtitle: 'Real-time Patient Monitoring System',
    problem: 'Early detection of abnormal patient vitals is critical for timely medical intervention. Traditional monitoring systems lack real-time anomaly detection capabilities.',
    architecture: 'Kafka streaming pipeline processes patient data in real-time. Autoencoder and Isolation Forest models detect anomalies. Flask API serves predictions, and PostgreSQL stores patient records and alerts.',
    techStack: ['Python', 'Kafka', 'Flask', 'PostgreSQL', 'Autoencoder', 'Isolation Forest', 'TensorFlow'],
    results: [
      'Real-time anomaly detection with <2s latency',
      'Autoencoder achieves 94% detection accuracy',
      'Kafka handles 10k+ events per second',
      'Automated alerts for medical staff'
    ],
    metrics: {
      accuracy: '94%',
      dataset: 'Real-time streaming',
      model: 'Autoencoder + Isolation Forest'
    },
    pipeline: 'Kafka Streaming',
    database: 'PostgreSQL',
    github: 'https://github.com/Akash2126/AI-Driven-Healthcare-Anomaly-Detection-System',
    demo: null
  },
  'finrelief-ai': {
    title: 'FinRelief AI',
    subtitle: 'AI-Powered Financial Decision Support Platform',
    problem: 'Individuals and small businesses struggle with optimal loan decisions and lack personalized financial advice. Existing solutions are either too expensive or lack AI-driven insights.',
    architecture: 'FastAPI backend with React frontend. ML models analyze financial data to provide loan optimization recommendations. PostgreSQL stores user profiles and financial records.',
    techStack: ['Python', 'FastAPI', 'React', 'Machine Learning', 'PostgreSQL', 'NLP'],
    results: [
      'Personalized loan recommendations',
      'Financial health analysis',
      'Budget optimization algorithms',
      'Currently in development'
    ],
    metrics: {
      accuracy: 'In Progress',
      dataset: 'User financial data',
      model: 'ML + NLP'
    },
    github: null,
    demo: null
  }
}

export default function CaseStudyPage() {
  const { projectName } = useParams()
  const project = caseStudyData[projectName]

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary-600 hover:underline">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 mb-8 transition-colors"
          >
            <FiArrowLeft size={18} />
            Back to Projects
          </Link>
          
          <span className="badge mb-4">Case Study</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{project.title}</h1>
          <p className="text-xl text-slate-500">{project.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Metrics */}
          {project.metrics && (
            <div className="card p-6 mb-12" data-aos="fade-up">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Project Metrics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {project.metrics.accuracy}
                  </div>
                  <div className="text-sm text-slate-500">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {project.metrics.dataset}
                  </div>
                  <div className="text-sm text-slate-500">Dataset</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {project.metrics.model}
                  </div>
                  <div className="text-sm text-slate-500">Model</div>
                </div>
              </div>
              {project.pipeline && (
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-lg font-bold text-slate-700 mb-1">
                      {project.pipeline}
                    </div>
                    <div className="text-sm text-slate-500">Pipeline</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <div className="text-lg font-bold text-slate-700 mb-1">
                      {project.database}
                    </div>
                    <div className="text-sm text-slate-500">Database</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Problem Statement */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Problem Statement</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{project.problem}</p>
          </div>

          {/* Architecture */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Architecture</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{project.architecture}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-primary-50 text-primary-700 border border-primary-100 px-3 py-1.5 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Results</h2>
            <div className="grid gap-3">
              {project.results.map((result, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck className="text-emerald-600" size={14} />
                  </div>
                  <p className="text-slate-600">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4" data-aos="fade-up">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FiGithub size={18} />
                View Code
                <FiExternalLink size={14} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                <FiExternalLink size={18} />
                Live Demo
              </a>
            )}
            {!project.github && !project.demo && (
              <span className="text-slate-400 italic">Repository coming soon</span>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
