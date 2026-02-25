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
        專注於前端開發與 SaaS 產品打造。
        擅長 N8N 自動化流程、LINE Bot / Telegram Bot 聊天機器人開發，
        並具備獨立開發與營運完整產品的能力。
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
