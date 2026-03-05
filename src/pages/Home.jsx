import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import AreasOfWork from '../components/AreasOfWork'
import Skills from '../components/Skills'
import CurrentlyBuilding from '../components/CurrentlyBuilding'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Companies from '../components/Companies'
import GitHubStats from '../components/GitHubStats'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AreasOfWork />
        <Skills />
        <CurrentlyBuilding />
        <Projects />
        <Certifications />
        <Companies />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
