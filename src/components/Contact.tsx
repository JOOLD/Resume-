import { resumeData } from '../data/resume'
import { Mail, MapPin, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            聯繫方式
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <a
            href={`mailto:${resumeData.email}`}
            className="flex items-center gap-4 p-5 rounded-xl bg-[var(--color-surface-light)] border border-slate-700/50 hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] group-hover:bg-[var(--color-primary)]/20 transition-colors">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <p className="text-white font-medium">{resumeData.email}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 rounded-xl bg-[var(--color-surface-light)] border border-slate-700/50">
            <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)]">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Location</p>
              <p className="text-white font-medium">{resumeData.location}</p>
            </div>
          </div>

          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl bg-[var(--color-surface-light)] border border-slate-700/50 hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] group-hover:bg-[var(--color-primary)]/20 transition-colors">
              <Github size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-400">GitHub</p>
              <p className="text-white font-medium">GitHub Profile</p>
            </div>
          </a>

          <a
            href={resumeData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl bg-[var(--color-surface-light)] border border-slate-700/50 hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] group-hover:bg-[var(--color-primary)]/20 transition-colors">
              <Linkedin size={22} />
            </div>
            <div>
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p className="text-white font-medium">LinkedIn Profile</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
