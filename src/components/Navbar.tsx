import { useState, useEffect } from 'react'

const navLinks = [
  { num: '01.', label: '關於我', href: '#about' },
  { num: '02.', label: '經歷', href: '#experience' },
  { num: '03.', label: '技能', href: '#skills' },
  { num: '04.', label: '聯繫', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 50)
      setHidden(y > lastY && y > 80)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12"
        style={{
          backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          height: scrolled ? '70px' : '100px',
        }}
      >
        <nav className="flex items-center justify-between h-full max-w-[1200px] mx-auto">
          <a
            href="#"
            className="text-[var(--color-green)] font-mono text-2xl font-bold hover:opacity-80 transition-opacity animate-fade-in"
          >
            JK
          </a>

          <div className="hidden md:flex items-center gap-8 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-[var(--font-mono)] text-[var(--color-slate-light)] hover:text-[var(--color-green)] transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <span className="text-[var(--color-green)] mr-1">{link.num}</span>
                {link.label}
              </a>
            ))}
            <a
              href="/Resume-/resume.pdf"
              className="px-4 py-2 border border-[var(--color-green)] text-[var(--color-green)] rounded text-[13px] hover:bg-[var(--color-green-tint)] transition-all"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              履歷 PDF
            </a>
          </div>

          <button
            className="md:hidden text-[var(--color-green)] z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-[var(--color-navy)]/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute right-0 top-0 bottom-0 w-[min(75vw,400px)] bg-[var(--color-navy-light)] shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)] flex flex-col items-center justify-center gap-8 p-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--color-slate-lightest)] text-lg text-center"
                style={{ fontFamily: 'var(--font-mono)' }}
                onClick={() => setMobileOpen(false)}
              >
                <span className="block text-[var(--color-green)] text-sm mb-1">{link.num}</span>
                {link.label}
              </a>
            ))}
            <a
              href="/Resume-/resume.pdf"
              className="mt-4 px-8 py-3 border border-[var(--color-green)] text-[var(--color-green)] rounded text-sm hover:bg-[var(--color-green-tint)] transition-all"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              履歷 PDF
            </a>
          </aside>
        </div>
      )}
    </>
  )
}
