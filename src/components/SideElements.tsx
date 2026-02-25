import { resumeData } from '../data/resume'

export default function SideElements() {
  return (
    <>
      <div className="hidden xl:flex fixed bottom-0 left-10 flex-col items-center gap-6 z-40 animate-fade-in stagger-7">
        <a
          href={resumeData.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-slate-mid)] hover:text-[var(--color-green)] hover:-translate-y-1 transition-all duration-300"
          title="LeadionAI"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </a>
        <a
          href={resumeData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-slate-mid)] hover:text-[var(--color-green)] hover:-translate-y-1 transition-all duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <div className="w-px h-24 bg-[var(--color-slate-mid)]" />
      </div>

      <div className="hidden xl:flex fixed bottom-0 right-10 flex-col items-center gap-6 z-40 animate-fade-in stagger-7">
        <a
          href={`mailto:${resumeData.email}`}
          className="text-[var(--color-slate-mid)] hover:text-[var(--color-green)] hover:-translate-y-1 transition-all duration-300 text-[12px] tracking-[0.1em]"
          style={{
            fontFamily: 'var(--font-mono)',
            writingMode: 'vertical-rl',
          }}
        >
          {resumeData.email}
        </a>
        <div className="w-px h-24 bg-[var(--color-slate-mid)]" />
      </div>
    </>
  )
}
