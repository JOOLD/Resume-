import { resumeData } from '../data/resume'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Education() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} className={`max-w-[700px] mx-auto px-6 md:px-12 pb-[100px] scroll-reveal ${visible ? 'visible' : ''}`}>
      <h3 className="text-xl font-semibold text-[var(--color-slate-lightest)] mb-6 flex items-center gap-3">
        <span className="text-[var(--color-green)]" style={{ fontFamily: 'var(--font-mono)', fontSize: '16px' }}>
          ✦
        </span>
        學習歷程
      </h3>

      {resumeData.education.map((edu, i) => (
        <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between py-4 border-b border-[var(--color-navy-lighter)]">
          <div>
            <p className="text-[var(--color-slate-lightest)] font-medium text-lg">{edu.school}</p>
            <p className="text-[var(--color-slate-mid)] text-sm">{edu.degree}</p>
            {'description' in edu && edu.description && (
              <p className="text-[var(--color-slate-dark)] text-[13px] mt-1">{edu.description}</p>
            )}
          </div>
          <p
            className="text-[var(--color-slate-mid)] text-[13px] mt-1 md:mt-0"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {edu.period}
          </p>
        </div>
      ))}
    </section>
  )
}
