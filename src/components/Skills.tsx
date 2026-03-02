import { resumeData } from '../data/resume'
import { useScrollReveal } from '../hooks/useScrollReveal'

const icons: Record<string, React.ReactNode> = {
  layout: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  server: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  cpu: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  cloud: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
}

export default function Skills() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} id="skills" className={`max-w-[900px] mx-auto px-6 md:px-12 section-padding scroll-reveal ${visible ? 'visible' : ''}`}>
      <h2 className="section-heading numbered-heading-04">技術能力</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {resumeData.skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="p-6 rounded-lg bg-[var(--color-navy-light)] border border-[var(--color-navy-lighter)] hover:border-[var(--color-green)]/40 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[var(--color-green)] group-hover:scale-110 transition-transform duration-300">
                {icons[cat.icon]}
              </span>
              <h3
                className="text-[var(--color-slate-lightest)] text-[15px] font-semibold"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-[12px] rounded-full bg-[var(--color-green-tint)] text-[var(--color-green)] hover:bg-[var(--color-green)]/20 transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
