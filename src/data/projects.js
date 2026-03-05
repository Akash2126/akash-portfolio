export const projects = [
  {
    id: 1,
    title: 'CareOpt AI',
    description:
      'Healthcare decision-support platform that recommends affordable hospitals based on treatment type, city, and budget. Features interactive maps, real-time filtering, and AI-powered cost optimization.',
    tech: ['FastAPI', 'PostgreSQL', 'React', 'Tailwind', 'Leaflet'],
    github: 'https://github.com/Akash2126/careopt-ai',
    status: 'Completed',
    icon: '🏥',
    color: 'from-blue-500 to-cyan-500',
    metrics: {
      accuracy: 'N/A',
      dataset: '500+ hospitals',
      model: 'Rule-based + ML Ranking'
    },
    caseStudy: 'careopt-ai'
  },
  {
    id: 2,
    title: 'Product Return Probability Predictor',
    description:
      'Machine learning model predicting the likelihood of product returns in e-commerce. Leverages feature engineering and ensemble methods to improve logistics decisions and reduce return costs.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    github: 'https://github.com/Akash2126/product-return-probability-predictor',
    status: 'Completed',
    icon: '📦',
    color: 'from-indigo-500 to-blue-500',
    metrics: {
      accuracy: '87%',
      dataset: '50k rows',
      model: 'Random Forest'
    },
    caseStudy: 'product-return-predictor'
  },
  {
    id: 3,
    title: 'AI-Driven Healthcare Anomaly Detection',
    description:
      'Real-time patient monitoring system that detects abnormal vitals using streaming data pipelines and ML models including Autoencoders and Isolation Forest.',
    tech: ['Python', 'Kafka', 'Flask', 'PostgreSQL', 'Autoencoder', 'Isolation Forest'],
    github: 'https://github.com/Akash2126/AI-Driven-Healthcare-Anomaly-Detection-System',
    status: 'Completed',
    icon: '🩺',
    color: 'from-blue-600 to-violet-500',
    metrics: {
      accuracy: '94%',
      dataset: 'Real-time streaming',
      model: 'Autoencoder + Isolation Forest',
      pipeline: 'Kafka Streaming',
      database: 'PostgreSQL'
    },
    caseStudy: 'healthcare-anomaly-detection'
  },
  {
    id: 4,
    title: 'FinRelief AI',
    description:
      'AI-driven financial decision-support platform for loan optimization and comprehensive financial analysis. Uses intelligent algorithms to personalize recommendations.',
    tech: ['Python', 'FastAPI', 'React', 'ML', 'PostgreSQL'],
    github: null,
    status: 'In Progress',
    icon: '💰',
    color: 'from-amber-500 to-orange-500',
    metrics: {
      accuracy: 'In Progress',
      dataset: 'User financial data',
      model: 'ML + NLP'
    },
    caseStudy: 'finrelief-ai'
  },
]
