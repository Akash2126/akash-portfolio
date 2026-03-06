import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    name: 'Core AI & Machine Learning',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Natural Language Processing (NLP)', level: 75 },
      { name: 'LLMs', level: 72 },
      { name: 'Generative AI', level: 70 },
      { name: 'Prompt Engineering', level: 65 },
      { name: 'RAG Systems', level: 60 },
      { name: 'Predictive Analytics', level: 80 },
    ],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'Data Analytics',
    skills: [
      { name: 'Excel', level: 80 },
      { name: 'Power BI', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'Data Analysis', level: 85 },
    ],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    name: 'Data & Backend Engineering',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 75 },
      { name: 'Kafka', level: 65 },
      { name: 'PostgreSQL', level: 80 },
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Engineering & Tools',
    skills: [
      { name: 'Software Testing', level: 70 },
      { name: 'Git / GitHub', level: 75 },
      { name: 'Docker', level: 60 },
      { name: 'REST APIs', level: 75 },
    ],
    color: 'from-orange-500 to-amber-500',
  },
]

const categoryColors = {
  'Core AI & Machine Learning': 'from-blue-500 to-indigo-500',
  'Data Analytics': 'from-cyan-500 to-teal-500',
  'Data & Backend Engineering': 'from-violet-500 to-purple-500',
  'Engineering & Tools': 'from-orange-500 to-amber-500',
}

function SkillBar({ skill, animate }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-slate-800 text-sm">{skill.name}</span>
        <span className="text-sm font-bold text-primary-600">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: animate ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ category, index, animate }) {
  return (
    <div 
      className="card p-6"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
          <span className="text-white text-lg">
            {index === 0 ? '🤖' : index === 1 ? '📊' : index === 2 ? '⚡' : '🔧'}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} animate={animate} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setAnimate(true), 200)
      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6" data-aos="fade-up">
          <span className="badge mx-auto mb-4">Skills</span>
          <h2 className="section-title">Technical Proficiency</h2>
          <p className="section-subtitle mx-auto text-center">
            Core technologies and tools I use to build intelligent systems.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, i) => (
            <SkillCategory 
              key={category.name} 
              category={category} 
              index={i}
              animate={animate} 
            />
          ))}
        </div>

        {/* Tech icons grid */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-center text-lg font-semibold text-slate-700 mb-8">
            Full Tech Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-4">
            {[
              { emoji: '🐍', name: 'Python' },
              { emoji: '🔬', name: 'TensorFlow' },
              { emoji: '🧠', name: 'Scikit-learn' },
              { emoji: '🐼', name: 'Pandas' },
              { emoji: '⚡', name: 'FastAPI' },
              { emoji: '🗄️', name: 'PostgreSQL' },
              { emoji: '⚛️', name: 'React' },
              { emoji: '☁️', name: 'AWS' },
              { emoji: '📡', name: 'Kafka' },
              { emoji: '🐳', name: 'Docker' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 hover:-translate-y-1 transition-all duration-200 cursor-default group"
              >
                <span className="text-2xl">{tech.emoji}</span>
                <span className="text-xs font-medium text-slate-600 group-hover:text-primary-700 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
