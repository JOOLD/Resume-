import { resumeData } from '../data/resume'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} id="contact" className={`max-w-[600px] mx-auto px-6 md:px-12 text-center section-padding scroll-reveal ${visible ? 'visible' : ''}`}>
      <p
        className="text-[var(--color-green)] text-[16px] mb-4"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        04. 接下來？
      </p>

      <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-[var(--color-slate-lightest)] mb-4">
        與我聯繫
      </h2>

      <p className="text-[var(--color-slate-mid)] text-lg leading-relaxed mb-12">
        我目前正在尋找新的機會。無論你有任何問題、合作提案，或只是想打個招呼，
        我都很樂意收到你的來信！
      </p>

      <a
        href={`mailto:${resumeData.email}`}
        className="inline-block px-8 py-4 border border-[var(--color-green)] text-[var(--color-green)] rounded text-[14px] hover:bg-[var(--color-green-tint)] transition-all duration-300"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Say Hello
      </a>
    </section>
  )
}
