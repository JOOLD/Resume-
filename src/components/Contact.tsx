import { useLang } from '../i18n/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const { t } = useLang()
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} id="contact" className={`max-w-[600px] mx-auto px-6 md:px-12 text-center section-padding scroll-reveal ${visible ? 'visible' : ''}`}>
      <p
        className="text-[var(--color-green)] text-[16px] mb-4"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {t.ui.contactPrefix}
      </p>

      <h2 className="text-[clamp(36px,5vw,52px)] font-bold text-[var(--color-slate-lightest)] mb-4">
        {t.ui.contactTitle}
      </h2>

      <p className="text-[var(--color-slate-mid)] text-lg leading-relaxed mb-12">
        {t.ui.contactBody}
      </p>

      <a
        href={`mailto:${t.email}`}
        className="inline-block px-8 py-4 border border-[var(--color-green)] text-[var(--color-green)] rounded text-[14px] hover:bg-[var(--color-green-tint)] transition-all duration-300"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {t.ui.contactCta}
      </a>
    </section>
  )
}
