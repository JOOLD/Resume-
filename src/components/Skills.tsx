import { resumeData } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            技術能力
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.skills.map((group, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[var(--color-surface-light)] border border-slate-700/50 hover:border-[var(--color-primary)]/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-sm rounded-lg bg-[var(--color-surface)] border border-slate-700/50 text-slate-300 hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary-light)] transition-all duration-200 cursor-default"
                  >
                    {skill}
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
