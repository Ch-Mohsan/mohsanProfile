import { useCallback, useEffect, useRef, useState } from 'react'
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
  const headerRef = useRef(null)

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const headerHeight = headerRef.current?.offsetHeight ?? 72
    const top = element.getBoundingClientRect().top + window.scrollY - headerHeight
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
  }, [])

  const handleNavClick = useCallback(
    (event, sectionId) => {
      event?.preventDefault?.()

      // Keep the URL hash in sync (useful for refresh / share).
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', `#${sectionId}`)
      }

      const scrollDelayMs = isMenuOpen ? 220 : 0
      setIsMenuOpen(false)
      // Framer Motion's height animations can temporarily reset scroll position on mobile.
      // Delay the section scroll until after the menu close animation completes.
      window.setTimeout(() => scrollToSection(sectionId), scrollDelayMs)
    },
    [isMenuOpen, scrollToSection],
  )

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

  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-[#1a2334]/80 bg-[#050c18]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] w-[min(1260px,92%)] items-center justify-between">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, 'home')}
          className="font-serif-display text-sm tracking-wide text-[#f5f7fb] md:text-base"
        >
          Mohsan Ali Zafar
        </a>

        <button
          type="button"
          className="border border-[#2d3a4d] px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#d6deee] md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.id)}
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
            className="md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="mx-auto w-[min(1260px,92%)] space-y-2 border-t border-[#1d2737] py-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.id)}
                    className={`block rounded-sm py-3 text-sm font-semibold uppercase tracking-[0.22em] transition ${
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