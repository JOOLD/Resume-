import { resumeData } from '../data/resume'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--color-surface-light)]/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            工作經歷
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mb-12" />

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="relative md:pl-16">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[var(--color-primary)]/10 border-2 border-[var(--color-primary)] flex items-center justify-center hidden md:flex">
                  <Briefcase size={16} className="text-[var(--color-primary-light)]" />
                </div>

                <div className="p-6 rounded-xl bg-[var(--color-surface-light)] border border-slate-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                      <p className="text-[var(--color-primary-light)] font-medium">{exp.role}</p>
                    </div>
                    <div className="text-sm text-slate-400 mt-2 md:mt-0 md:text-right">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-300">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
