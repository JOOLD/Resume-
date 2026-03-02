import { useEffect, useRef, useState } from 'react'
import { resumeData } from '../data/resume'
import { useScrollReveal } from '../hooks/useScrollReveal'

function useCountUp(end: number, trigger: boolean, duration = 1500) {
  const [count, setCount] = useState(0)
  const ran = useRef(false)

  useEffect(() => {
    if (!trigger || ran.current) return
    ran.current = true

    const start = performance.now()
    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [trigger, end, duration])

  return count
}

function StatCard({ value, suffix, label, trigger }: {
  value: number
  suffix: string
  label: string
  trigger: boolean
}) {
  const count = useCountUp(value, trigger)

  return (
    <div className="text-center p-3">
      <div
        className="text-2xl md:text-3xl font-bold text-[var(--color-green)]"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {count}{suffix}
      </div>
      <div className="text-[12px] text-[var(--color-slate-mid)] mt-1" style={{ fontFamily: 'var(--font-mono)' }}>
        {label}
      </div>
    </div>
  )
}

export default function FeaturedProject() {
  const { ref, visible } = useScrollReveal()
  const { featuredProject: project } = resumeData

  return (
    <section ref={ref} id="featured" className={`max-w-[900px] mx-auto px-6 md:px-12 section-padding scroll-reveal ${visible ? 'visible' : ''}`}>
      <h2 className="section-heading numbered-heading-02">精選專案</h2>

      <div className="relative rounded-lg bg-[var(--color-navy-light)] border border-[var(--color-navy-lighter)] overflow-hidden hover:border-[var(--color-green)]/30 transition-all duration-300">
        <div className="grid md:grid-cols-[1fr_1fr] gap-0">
          <div className="relative aspect-video md:aspect-auto overflow-hidden bg-[var(--color-navy)]">
            <img
              src={project.screenshot}
              alt={project.name}
              className="w-full h-full object-cover object-top opacity-70 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
                target.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'min-h-[250px]')
                const placeholder = document.createElement('span')
                placeholder.className = 'text-6xl font-bold select-none'
                placeholder.style.color = 'rgba(100, 255, 218, 0.15)'
                placeholder.textContent = 'Leadion AI'
                target.parentElement!.appendChild(placeholder)
              }}
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-center">
            <p
              className="text-[var(--color-green)] text-[13px] mb-2"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Featured Project
            </p>

            <h3 className="text-2xl font-bold text-[var(--color-slate-lightest)] mb-1">
              {project.name}
            </h3>

            <p
              className="text-[var(--color-green)]/70 text-[13px] mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {project.subtitle}
            </p>

            <p className="text-[var(--color-slate-mid)] text-[15px] leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-t border-b border-[var(--color-navy-lighter)]">
              {project.stats.map((stat) => (
                <StatCard key={stat.label} {...stat} trigger={visible} />
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] rounded-full bg-[var(--color-green-tint)] text-[var(--color-green)]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-green)] text-[var(--color-green)] rounded text-[13px] hover:bg-[var(--color-green-tint)] transition-all duration-300 w-fit"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              查看專案
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
