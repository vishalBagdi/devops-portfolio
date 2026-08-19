import { CloudCog, Menu, X } from 'lucide-react'
import { AnimatePresence, m } from 'motion/react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'AWS', href: '#aws' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavClick() {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-3xl border transition-all duration-300 ${
          isScrolled
            ? 'border-white/12 bg-[rgba(3,9,22,0.82)] shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-2xl'
            : 'border-white/8 bg-[rgba(3,9,22,0.48)] shadow-[0_12px_32px_rgba(2,6,23,0.25)] backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between gap-6 px-5 py-4 sm:px-6">
          <a
            href="#home"
            onClick={handleNavClick}
            className="group inline-flex items-center gap-3"
            aria-label="Go to Home section"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,153,67,0.16),rgba(56,189,248,0.08))] text-[var(--accent-orange)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <CloudCog className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold tracking-[0.18em] text-[var(--text-primary)] uppercase">
                Vishal Bagdi
              </span>
              <span className="block text-xs tracking-[0.12em] text-[var(--text-muted)] uppercase">
                DevOps Engineer
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[rgba(56,189,248,0.3)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--text-primary)] transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[rgba(56,189,248,0.3)] lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <m.nav
              id="mobile-navigation"
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="overflow-hidden border-t border-white/8 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="grid gap-1 px-3 py-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:bg-white/6 hover:text-white focus:outline-none focus:ring-2 focus:ring-[rgba(56,189,248,0.3)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </m.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
