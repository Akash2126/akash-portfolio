import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home'
import CaseStudyPage from './pages/CaseStudyPage'
import ScrollProgress from './components/ScrollProgress'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  return (
    <Router>
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:projectName" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  )
}

export default App
