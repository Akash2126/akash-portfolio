import awsLogo from "../assets/logos/aws.png"
import googleLogo from "../assets/logos/google.png"
import ibmLogo from "../assets/logos/ibm.png"
import accentureLogo from "../assets/logos/accenture.png"
import smartbridgeLogo from "../assets/logos/smartbridge.png"

const companies = [
  { name: "AWS", logo: awsLogo },
  { name: "Google", logo: googleLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "Accenture", logo: accentureLogo },
  { name: "SmartBridge", logo: smartbridgeLogo },
]

// Duplicate for seamless loop
const scrollItems = [...companies, ...companies]

export default function Companies() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10" data-aos="fade-up">
        <div className="text-center">
          <span className="badge mx-auto mb-4">Ecosystem</span>
          <h2 className="text-2xl font-bold text-slate-900">
            Technologies & Platforms
          </h2>
          <p className="text-slate-500 mt-2 text-sm">Trained & certified on industry-leading platforms</p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="slider-track gap-4">
          {scrollItems.map((company, i) => (
            <div
              key={i}
              className="flex items-center bg-white p-2 rounded-md mx-6 flex-shrink-0 min-w-[160px]"
            >
              <img 
                src={company.logo} 
                alt={company.name}
                className="h-10 object-contain mx-6 bg-white p-2 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
