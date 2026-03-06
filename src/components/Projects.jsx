import { FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6" data-aos="fade-up">
          <span className="badge mx-auto mb-4">Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto text-center">
            AI, ML, and Data Engineering projects solving real-world problems across healthcare, finance, and e-commerce domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8" data-aos="fade-up">
          <a
            href="https://github.com/Akash2126"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FiGithub size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
