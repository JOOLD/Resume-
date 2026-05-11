import { useLang } from '../i18n/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-[1000px] mx-auto px-6 md:px-12 pt-24">
      <p
        className="text-[var(--color-green)] mb-5 animate-fade-in-up stagger-1"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '16px' }}
      >
        {t.ui.heroIntro}
      </p>

      <h1 className="text-[clamp(40px,8vw,80px)] font-bold text-[var(--color-slate-lightest)] leading-[1.1] m-0 animate-fade-in-up stagger-2">
        {t.name}
      </h1>

      <h2 className="text-[clamp(30px,6vw,60px)] font-bold text-[var(--color-slate-mid)] leading-[1.1] mt-2 animate-fade-in-up stagger-3">
        {t.title}
      </h2>

      <p className="max-w-[540px] mt-8 text-[var(--color-slate-mid)] text-lg leading-relaxed animate-fade-in-up stagger-4">
        {t.ui.heroDescriptionPrefix}
        <a
          href={t.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-green)] hover:underline underline-offset-4"
        >
          {t.ui.heroDescriptionLink}
        </a>
        {t.ui.heroDescriptionSuffix}
      </p>

      <div className="mt-12 animate-fade-in-up stagger-5">
        <a
          href={`mailto:${t.email}`}
          className="inline-block px-7 py-4 border border-[var(--color-green)] text-[var(--color-green)] rounded text-[14px] hover:bg-[var(--color-green-tint)] transition-all duration-300"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {t.ui.heroCta}
        </a>
      </div>
    </section>
  )
}
