import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import AreasOfWork from '../components/AreasOfWork'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import GitHubStats from '../components/GitHubStats'
import Certifications from '../components/Certifications'
import CommunityKnowledgeSharing from '../components/CommunityKnowledgeSharing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <AreasOfWork />
        <Experiences />
        <Projects />
        <GitHubStats />
        <Certifications />
        <CommunityKnowledgeSharing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
