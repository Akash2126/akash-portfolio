import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Expertise', href: '#areas' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const sections = navLinks.map(link => link.href.slice(1))
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Get active state for a link
  const isActive = (href) => {
    const section = href.slice(1)
    return activeSection === section
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900 shadow-lg' : 'bg-blue-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2"
          >
            <span className="font-bold text-xl text-white">AT</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-200"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="bg-white rounded-xl p-6 mx-4 mt-20 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{link.label}</span>
                </button>
              ))}

              <div className="pt-4">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full flex items-center justify-center p-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <span className="font-semibold text-white">Hire Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </nav>
  )
}