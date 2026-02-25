import { resumeData } from '../data/resume'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} id="skills" className={`max-w-[700px] mx-auto px-6 md:px-12 section-padding scroll-reveal ${visible ? 'visible' : ''}`}>
      <h2 className="section-heading numbered-heading-03">技術能力</h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3 list-none p-0">
        {resumeData.skills.map((skill) => (
          <li
            key={skill}
            className="relative pl-5 text-[14px] text-[var(--color-slate-mid)] hover:text-[var(--color-green)] transition-colors duration-200"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="absolute left-0 text-[var(--color-green)]">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
