import { useState } from 'react'
import { resumeData } from '../data/resume'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} id="experience" className={`max-w-[700px] mx-auto px-6 md:px-12 section-padding scroll-reveal ${visible ? 'visible' : ''}`}>
      <h2 className="section-heading numbered-heading-02">工作經歷</h2>

      <div className="flex flex-col md:flex-row gap-0">
        <div
          className="relative flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l-2 border-[var(--color-navy-lighter)]"
          role="tablist"
        >
          {resumeData.experience.map((exp, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeTab === i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-3 text-[13px] text-left whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:mb-0 md:-ml-[2px] transition-all duration-300 cursor-pointer ${
                activeTab === i
                  ? 'text-[var(--color-green)] border-[var(--color-green)] bg-[var(--color-navy-light)]'
                  : 'text-[var(--color-slate-mid)] border-transparent hover:text-[var(--color-green)] hover:bg-[var(--color-navy-light)]'
              }`}
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div className="pt-3 md:pt-1 md:pl-8 min-h-[320px]">
          {resumeData.experience.map((exp, i) => (
            <div
              key={i}
              className={`${activeTab === i ? 'block' : 'hidden'}`}
              role="tabpanel"
            >
              <h3 className="text-xl text-[var(--color-slate-lightest)] font-medium mb-1">
                {exp.role}
                <span className="text-[var(--color-green)]">
                  {' @ '}
                  <a
                    href={exp.url}
                    className="text-[var(--color-green)] hover:underline decoration-[var(--color-green)] underline-offset-4"
                  >
                    {exp.company}
                  </a>
                </span>
              </h3>

              <p
                className="text-[13px] text-[var(--color-slate-mid)] mb-6"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {exp.period}
              </p>

              <ul className="space-y-3 mb-6 list-none p-0">
                {exp.highlights.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-6 text-[var(--color-slate-mid)] text-[15px] leading-relaxed"
                  >
                    <span className="absolute left-0 text-[var(--color-green)]">▹</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-[12px] rounded-full bg-[var(--color-green-tint)] text-[var(--color-green)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
