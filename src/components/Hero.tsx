import { ChevronDown } from 'lucide-react'
import { resumeData } from '../data/resume'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)]/8 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-surface)_70%)]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="opacity-0 animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] text-sm font-medium">
            Open to Work
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 opacity-0 animate-fade-in-up stagger-1">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            {resumeData.name}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-3 opacity-0 animate-fade-in-up stagger-2 tracking-wide">
          {resumeData.nameEn}
        </p>

        <h2 className="text-xl md:text-2xl font-medium mb-6 opacity-0 animate-fade-in-up stagger-3">
          <span className="bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)] bg-clip-text text-transparent">
            {resumeData.title}
          </span>
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up stagger-4">
          {resumeData.subtitle}
        </p>

        <div className="flex justify-center gap-4 opacity-0 animate-fade-in-up stagger-5">
          <a
            href="#contact"
            className="px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/25 hover:-translate-y-0.5"
          >
            與我聯繫
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            查看經歷
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-[var(--color-primary-light)] transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
