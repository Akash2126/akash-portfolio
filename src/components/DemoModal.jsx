import { useState, useEffect } from 'react'
import { FiX, FiArrowRight, FiCheckCircle } from 'react-icons/fi'

// Demo configurations for each project
const demoConfigs = {
  'careopt-ai': {
    title: 'CareOpt AI - Hospital Recommendation',
    inputLabel: 'Treatment Type',
    inputPlaceholder: 'e.g., Cardiac Surgery, Dental, Orthopedic',
    inputs: [
      { name: 'treatment', label: 'Treatment Type', type: 'select', options: ['Cardiac Surgery', 'Dental', 'Orthopedic', 'Cancer Treatment', 'General Medicine'] },
      { name: 'budget', label: 'Budget (INR)', type: 'number', placeholder: 'e.g., 50000' },
      { name: 'city', label: 'City', type: 'select', options: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad'] }
    ],
    predict: (inputs) => {
      const baseScore = Math.random() * 30 + 70
      const budgetFactor = inputs.budget > 100000 ? 10 : inputs.budget > 50000 ? 5 : 0
      const hospitals = ['Apollo Hospital', 'Fortis Healthcare', 'Max Hospital', 'Medanta', 'Narayana Health']
      const hospital = hospitals[Math.floor(Math.random() * hospitals.length)]
      const savings = Math.floor(Math.random() * 30) + 10
      return {
        prediction: hospital,
        confidence: Math.min(95, Math.floor(baseScore + budgetFactor)),
        explanation: `Recommended ${hospital} based on your ${inputs.treatment || 'treatment'} requirements in ${inputs.city || 'your city'} with estimated savings of ${savings}% compared to average.`
      }
    }
  },
  'product-return-predictor': {
    title: 'Product Return Predictor',
    inputLabel: 'Product Features',
    inputPlaceholder: 'Enter product details...',
    inputs: [
      { name: 'productCategory', label: 'Product Category', type: 'select', options: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'] },
      { name: 'price', label: 'Price (USD)', type: 'number', placeholder: 'e.g., 99.99' },
      { name: 'customerRating', label: 'Customer Rating', type: 'select', options: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'] }
    ],
    predict: (inputs) => {
      const price = parseFloat(inputs.price) || 50
      const categoryRisk = { 'Electronics': 15, 'Clothing': 25, 'Home & Garden': 10, 'Sports': 12, 'Books': 5 }
      const risk = categoryRisk[inputs.productCategory] || 15
      const priceRisk = price > 200 ? 20 : price > 100 ? 10 : 0
      const returnProbability = Math.min(85, 20 + risk + priceRisk)
      return {
        prediction: returnProbability > 50 ? 'High Return Risk' : returnProbability > 25 ? 'Medium Return Risk' : 'Low Return Risk',
        confidence: Math.floor(Math.random() * 15) + 80,
        explanation: `This product has a ${returnProbability}% probability of being returned. ${returnProbability > 50 ? 'Consider implementing preventive measures like detailed product descriptions or size guides.' : 'Standard logistics handling is recommended.'}`
      }
    }
  },
  'healthcare-anomaly-detection': {
    title: 'Healthcare Anomaly Detection',
    inputLabel: 'Patient Vitals',
    inputPlaceholder: 'Enter vital signs...',
    inputs: [
      { name: 'heartRate', label: 'Heart Rate (bpm)', type: 'number', placeholder: 'e.g., 72' },
      { name: 'bloodPressure', label: 'Blood Pressure', type: 'select', options: ['Normal (120/80)', 'Elevated (130/85)', 'High (140/90+)'] },
      { name: 'temperature', label: 'Temperature (°F)', type: 'number', placeholder: 'e.g., 98.6' }
    ],
    predict: (inputs) => {
      const hr = parseInt(inputs.heartRate) || 70
      const temp = parseFloat(inputs.temperature) || 98.6
      const isHighBP = inputs.bloodPressure && inputs.bloodPressure.includes('High')
      
      let anomalyScore = 0
      if (hr > 100 || hr < 60) anomalyScore += 30
      if (temp > 99.5 || temp < 97.5) anomalyScore += 25
      if (isHighBP) anomalyScore += 20
      
      const randomFactor = Math.floor(Math.random() * 20)
      anomalyScore = Math.min(100, anomalyScore + randomFactor)
      
      return {
        prediction: anomalyScore > 60 ? 'ANOMALY DETECTED' : anomalyScore > 30 ? 'Warning - Monitor' : 'Normal',
        confidence: Math.floor(Math.random() * 10) + 85,
        explanation: anomalyScore > 60 
          ? `Critical: Multiple vital signs deviate from normal ranges. Heart rate: ${hr} bpm, Temperature: ${temp}°F. Immediate attention recommended.`
          : anomalyScore > 30
          ? `Warning: Some vitals are outside normal range. Continue monitoring. Heart rate: ${hr} bpm.`
          : `All vital signs are within normal parameters. Patient status: Stable.`
      }
    }
  },
  'finrelief-ai': {
    title: 'FinRelief AI - Loan Optimizer',
    inputLabel: 'Financial Details',
    inputPlaceholder: 'Enter financial information...',
    inputs: [
      { name: 'income', label: 'Annual Income (USD)', type: 'number', placeholder: 'e.g., 50000' },
      { name: 'loanAmount', label: 'Desired Loan Amount', type: 'number', placeholder: 'e.g., 10000' },
      { name: 'creditScore', label: 'Credit Score', type: 'select', options: ['Excellent (750+)', 'Good (700-749)', 'Fair (650-699)', 'Poor (<650)'] }
    ],
    predict: (inputs) => {
      const income = parseInt(inputs.income) || 50000
      const loan = parseInt(inputs.loanAmount) || 10000
      const credit = inputs.creditScore || 'Good (700-749)'
      
      const loanToIncome = (loan / income) * 100
      let interestRate = 8.5
      if (credit.includes('Excellent')) interestRate = 5.5
      else if (credit.includes('Good')) interestRate = 7.0
      else if (credit.includes('Fair')) interestRate = 10.0
      else interestRate = 14.0
      
      const monthlyRate = interestRate / 100 / 12
      const monthlyPayment = (loan * monthlyRate * Math.pow(1 + monthlyRate, 60)) / (Math.pow(1 + monthlyRate, 60) - 1)
      
      return {
        prediction: `$${Math.floor(monthlyPayment)}/month`,
        confidence: Math.floor(Math.random() * 15) + 80,
        explanation: `Based on your income of $${income.toLocaleString()}, loan amount of $${loan.toLocaleString()}, and ${credit} credit score, we recommend a ${interestRate}% interest rate with monthly payment of $${Math.floor(monthlyPayment.toFixed(2))} over 5 years.`
      }
    }
  }
}

export default function DemoModal({ isOpen, onClose, projectTitle, caseStudy }) {
  const [inputs, setInputs] = useState({})
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const config = demoConfigs[caseStudy]

  useEffect(() => {
    if (!isOpen) {
      setInputs({})
      setResult(null)
    }
  }, [isOpen])

  if (!isOpen || !config) return null

  const handleInputChange = (name, value) => {
    setInputs(prev => ({ ...prev, [name]: value }))
  }

  const handlePredict = () => {
    setIsLoading(true)
    setTimeout(() => {
      const prediction = config.predict(inputs)
      setResult(prediction)
      setIsLoading(false)
    }, 1500)
  }

  const handleClose = () => {
    setInputs({})
    setResult(null)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fadeIn">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{config.title}</h3>
            <p className="text-sm text-slate-500">Interactive ML Demo</p>
          </div>
          <button 
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            {config.inputs.map((input) => (
              <div key={input.name}>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  {input.label}
                </label>
                {input.type === 'select' ? (
                  <select
                    value={inputs[input.name] || ''}
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-700"
                  >
                    <option value="">Select {input.label}</option>
                    {input.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={input.type}
                    value={inputs[input.name] || ''}
                    onChange={(e) => handleInputChange(input.name, e.target.value)}
                    placeholder={input.placeholder}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-700"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Predict Button */}
          <button
            onClick={handlePredict}
            disabled={isLoading}
            className="w-full py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing...
              </span>
            ) : (
              <>
                Run Prediction
                <FiArrowRight size={18} />
              </>
            )}
          </button>

          {/* Result */}
          {result && (
            <div className="mt-6 p-5 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl border border-primary-100 animate-fadeIn">
              <div className="flex items-center gap-2 mb-3">
                <FiCheckCircle className="text-emerald-500" size={20} />
                <span className="text-sm font-semibold text-slate-700">Prediction Result</span>
              </div>
              
              <div className="mb-3">
                <div className="text-xs text-slate-500 mb-1">Prediction</div>
                <div className="text-xl font-bold gradient-text">{result.prediction}</div>
              </div>
              
              <div className="mb-3">
                <div className="text-xs text-slate-500 mb-1">Confidence Score</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-600 to-blue-400 rounded-full transition-all duration-500"
                      style={{ width: `${result.confidence}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{result.confidence}%</span>
                </div>
              </div>
              
              <div>
                <div className="text-xs text-slate-500 mb-1">Explanation</div>
                <p className="text-sm text-slate-600 leading-relaxed">{result.explanation}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
