import { FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="badge mx-auto mb-4">Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto text-center">
            AI and ML projects tackling real-world problems across healthcare,
            e-commerce, and finance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
        <div className="text-center mt-12" data-aos="fade-up">
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
