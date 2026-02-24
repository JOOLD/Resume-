import { resumeData } from '../data/resume'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[var(--color-surface-light)]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            學歷
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mb-12" />

        <div className="space-y-6">
          {resumeData.education.map((edu, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[var(--color-surface-light)] border border-slate-700/50 flex items-center gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] shrink-0">
                <GraduationCap size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                <p className="text-slate-400">{edu.degree}</p>
              </div>
              <p className="text-sm text-slate-400 hidden md:block">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
