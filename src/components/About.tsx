import { resumeData } from '../data/resume'
import { useScrollReveal } from '../hooks/useScrollReveal'

const highlightSkills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'Angular',
  'React',
  'N8N',
  'LINE Bot',
]

export default function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} id="about" className={`max-w-[900px] mx-auto px-6 md:px-12 section-padding scroll-reveal ${visible ? 'visible' : ''}`}>
      <h2 className="section-heading numbered-heading-01">關於我</h2>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12">
        <div className="space-y-4 text-[var(--color-slate-mid)] text-[16px]">
          {resumeData.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <p className="mt-6 text-[var(--color-slate-light)]">以下是我近期主要使用的技術：</p>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 list-none p-0">
            {highlightSkills.map((skill) => (
              <li
                key={skill}
                className="relative pl-5 text-[13px] text-[var(--color-slate-mid)]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <span className="absolute left-0 text-[var(--color-green)]">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group mx-auto md:mx-0">
          <div className="relative w-[250px] h-[250px] rounded overflow-hidden z-10">
            <div className="absolute inset-0 bg-[var(--color-green)]/20 hover:bg-transparent transition-all duration-300 z-20" />
            <div className="w-full h-full bg-[var(--color-navy-lighter)] flex items-center justify-center">
              <span className="text-8xl font-bold select-none" style={{ color: 'rgba(100, 255, 218, 0.3)' }}>JC</span>
            </div>
          </div>
          <div className="absolute top-[15px] left-[15px] w-[250px] h-[250px] border-2 border-[var(--color-green)] rounded z-0 transition-all duration-300 group-hover:top-[10px] group-hover:left-[10px]" />
        </div>
      </div>
    </section>
  )
}
