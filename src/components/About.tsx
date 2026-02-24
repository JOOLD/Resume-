import { resumeData } from '../data/resume'
import { Code2, Building2, Rocket } from 'lucide-react'

const highlights = [
  {
    icon: <Building2 size={24} />,
    title: '金融科技經驗',
    desc: '富邦金控兩年半實戰經驗',
  },
  {
    icon: <Code2 size={24} />,
    title: '架構現代化',
    desc: 'XSL 遺留系統翻新為 Angular',
  },
  {
    icon: <Rocket size={24} />,
    title: 'SaaS 產品開發',
    desc: '獨立開發全端 SaaS 平台',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            關於我
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[var(--color-surface-light)] border border-slate-700/50 hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed max-w-4xl">
          {resumeData.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
