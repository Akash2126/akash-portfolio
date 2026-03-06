import { FiInstagram, FiExternalLink, FiYoutube, FiBookOpen } from 'react-icons/fi'

export default function CommunityKnowledgeSharing() {
  return (
    <section id="community" className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="badge mx-auto mb-4">Community</span>
          <h2 className="section-title">Community & Knowledge Sharing</h2>
          <p className="section-subtitle mx-auto text-center">
            Empowering the next generation of AI engineers through content creation, workshops, and educational outreach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="card p-8 shine-card hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-5xl shadow-lg flex-shrink-0">
                🤖
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  AI Content Creator – The Analytical Mind
                </h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  Passionate about making AI/ML concepts accessible to everyone! I create beginner-friendly content covering Machine Learning, Generative AI, LLM applications, and Data Analytics. My mission is to bridge the gap between complex AI concepts and aspiring engineers through practical, easy-to-understand tutorials.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-600 border border-purple-100">AI Education</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-pink-50 text-pink-600 border border-pink-100">ML Tutorials</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100">Student Mentorship</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://www.instagram.com/theanalyticalmind.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <FiInstagram size={18} />
                    Instagram
                    <FiExternalLink size={14} />
                  </a>
                  <a
                    href="https://www.youtube.com/@TheAnalyticalMind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    <FiYoutube size={18} />
                    YouTube
                    <FiExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Community Activities */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="card p-5 shine-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-lg">
                  🎓
                </div>
                <h4 className="font-semibold text-slate-900">AI Workshops</h4>
              </div>
              <p className="text-sm text-slate-500">
                Conducted hands-on AI/ML workshops at universities helping students build their first ML models.
              </p>
            </div>
            <div className="card p-5 shine-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-lg">
                  📝
                </div>
                <h4 className="font-semibold text-slate-900">Technical Content</h4>
              </div>
              <p className="text-sm text-slate-500">
                Creating educational posts, tutorials, and guides on AI tools, LLMs, and practical ML workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
