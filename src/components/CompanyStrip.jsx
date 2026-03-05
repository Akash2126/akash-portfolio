import pythonLogo from "../assets/logos/python.svg"
import fastapiLogo from "../assets/logos/fastapi.svg"
import kafkaLogo from "../assets/logos/kafka.svg"
import awsLogo from "../assets/logos/aws.png"
import googleLogo from "../assets/logos/google.png"
import dockerLogo from "../assets/logos/docker.svg"
import postgresqlLogo from "../assets/logos/postgresql.svg"
import reactLogo from "../assets/logos/react.svg"

const technologies = [
  { name: 'Python', logo: pythonLogo },
  { name: 'FastAPI', logo: fastapiLogo },
  { name: 'Kafka', logo: kafkaLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Google Cloud', logo: googleLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'React', logo: reactLogo },
]

export default function CompanyStrip() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Technologies & Ecosystem
          </p>
        </div>

        {/* Technology Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
