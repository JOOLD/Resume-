import { resumeData } from '../data/resume'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-[1000px] mx-auto px-6 md:px-12 pt-24">
      <p
        className="text-[var(--color-green)] mb-5 animate-fade-in-up stagger-1"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '16px' }}
      >
        你好，我是
      </p>

      <h1 className="text-[clamp(40px,8vw,80px)] font-bold text-[var(--color-slate-lightest)] leading-[1.1] m-0 animate-fade-in-up stagger-2">
        {resumeData.name}
      </h1>

      <h2 className="text-[clamp(30px,6vw,60px)] font-bold text-[var(--color-slate-mid)] leading-[1.1] mt-2 animate-fade-in-up stagger-3">
        {resumeData.title}
      </h2>

      <p className="max-w-[540px] mt-8 text-[var(--color-slate-mid)] text-lg leading-relaxed animate-fade-in-up stagger-4">
        我打造從前端到後端的完整產品。目前獨立開發並營運
        {' '}<a href="https://leadionai.zeabur.app/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-green)] hover:underline underline-offset-4">Leadion AI</a>{' '}
        SaaS 平台，整合 AI、自動化與金流系統，服務跨國市場。
      </p>

      <div className="mt-12 animate-fade-in-up stagger-5">
        <a
          href={`mailto:${resumeData.email}`}
          className="inline-block px-7 py-4 border border-[var(--color-green)] text-[var(--color-green)] rounded text-[14px] hover:bg-[var(--color-green-tint)] transition-all duration-300"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          與我聯繫
        </a>
      </div>
    </section>
  )
}
