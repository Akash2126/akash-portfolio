import { useState } from 'react'
import { FiGithub, FiCode, FiExternalLink } from 'react-icons/fi'
import { FaCode } from 'react-icons/fa'

const GITHUB_USER = 'Akash2126'

function GitHubImageCard({ src, alt, fallbackTitle, fallbackDesc, icon: Icon }) {
  const [error, setError] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      {error ? (
        // Fallback placeholder
        <div className="p-6 flex flex-col items-center justify-center min-h-[150px] text-center">
          <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
            <Icon className="text-gray-400" size={28} />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{fallbackTitle}</h3>
          <p className="text-sm text-gray-500">{fallbackDesc}</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full max-w-[600px] mx-auto h-auto"
          loading="lazy"
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

export default function GitHubStats() {
  const statsImageUrl = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=tokyonight&cache_seconds=1800`
  const languagesImageUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=tokyonight`
  const streakImageUrl = `https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=tokyonight`
  const graphImageUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USER}&theme=github-compact`

  return (
    <section id="github" className="py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            GitHub Performance
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            My contributions, top languages, and open-source activity on GitHub.
          </p>
        </div>

        {/* Row 1: GitHub Stats | Top Languages */}
        <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-5xl mx-auto">
          <GitHubImageCard
            src={statsImageUrl}
            alt="GitHub Stats - Repository count, commits, and contributions"
            fallbackTitle="GitHub Stats"
            fallbackDesc="Repository activity and contributions overview."
            icon={FiGithub}
          />
          <GitHubImageCard
            src={languagesImageUrl}
            alt="Top Programming Languages used"
            fallbackTitle="Top Programming Languages"
            fallbackDesc="Most frequently used technologies across projects."
            icon={FaCode}
          />
        </div>

        {/* Row 2: GitHub Streak (Centered) */}
        <div className="mb-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <img
              src={streakImageUrl}
              alt="GitHub Streak - Current streak and longest streak statistics"
              className="w-full max-w-[600px] mx-auto h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 3: Contribution Graph (Full Width) */}
        <div className="mb-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <img
              src={graphImageUrl}
              alt="GitHub Contribution Graph - Activity over time"
              className="w-full max-w-[600px] mx-auto h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            <FiGithub size={16} />
            View GitHub Profile
            <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
