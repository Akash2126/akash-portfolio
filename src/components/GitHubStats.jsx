import { FiGithub, FiExternalLink } from 'react-icons/fi'

const GITHUB_USER = 'Akash2126'

export default function GitHubStats() {
  return (
    <section id="github" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="badge mx-auto mb-4">Open Source</span>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle mx-auto text-center">
            My contributions, top languages, and open-source activity on GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* GitHub Stats Card */}
          <div className="card p-4 overflow-hidden" data-aos="fade-right">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=default&title_color=2563eb&icon_color=2563eb&text_color=334155&bg_color=ffffff&border_color=e2e8f0&border_radius=12&hide_border=false`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Top Languages Card */}
          <div className="card p-4 overflow-hidden" data-aos="fade-left">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=default&title_color=2563eb&text_color=334155&bg_color=ffffff&border_color=e2e8f0&border_radius=12&hide_border=false`}
              alt="Top Languages"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Streak Stats */}
          <div className="card p-4 overflow-hidden md:col-span-2" data-aos="fade-up">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USER}&theme=default&ring=2563eb&fire=2563eb&currStreakLabel=2563eb&border=e2e8f0&border_radius=12`}
              alt="GitHub Streak"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10" data-aos="fade-up">
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
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
