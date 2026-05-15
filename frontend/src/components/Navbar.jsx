import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.01,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1a2334]/80 bg-[#050c18]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] w-[min(1260px,92%)] items-center justify-between">
        <a href="#home" className="font-serif-display text-sm tracking-wide text-[#f5f7fb] md:text-base">
          Mohsan Ali Zafar
        </a>

        <button
          type="button"
          className="border border-[#2d3a4d] px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#d6deee] md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.22em] transition ${
                  activeSection === link.id ? 'text-[#f0d8a8]' : 'text-[#93a2bd] hover:text-[#f2f5fa]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <Motion.div
            key="mobile-menu"
            className="overflow-hidden md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mx-auto w-[min(1260px,92%)] space-y-4 border-t border-[#1d2737] py-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-[10px] uppercase tracking-[0.2em] transition ${
                      activeSection === link.id ? 'text-[#f2d9a4]' : 'text-[#b0b9cc]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar